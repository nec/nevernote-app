import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import styles from "./TextNote.module.css";
import { toDate, findNotebookById, debounce } from "../../utils";
import { selectNotebooks } from "../../store/notebooks/selectors";
import { selectActiveNote } from "../../store/notes/selectors";
import { updateNote } from "../../store/textnote/actions";

function TextNote() {
  const [fieldsVal, setFieldsVal] = React.useState({
    title: "",
    text: ""
  });
  const ref = React.useRef(fieldsVal);
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const notebooks = useSelector(selectNotebooks);
  const note = useSelector(selectActiveNote, shallowEqual);

  React.useEffect(() => {
    if (!note) return;
    setFieldsVal({
      title: note.title,
      text: note.text
    });
  }, [note]);

  const handleUpdateNote = React.useCallback(
    fields => {
      dispatch(updateNote(noteId, fields));
    },
    [dispatch, noteId]
  );

  const debUpdateNote = React.useCallback(debounce(handleUpdateNote, 2000), [
    handleUpdateNote
  ]);

  const onChangeNote = e => {
    const { name, value } = e.target;
    const newState = {
      ...fieldsVal,
      [name]: value
    };
    setFieldsVal(newState);
    ref.current = newState;
    debUpdateNote(ref.current);
  };

  if (!note) {
    return <div className={styles.placeholderEmpty} />;
  }

  return (
    note && (
      <>
        <div className={styles.info}>
          <span className={styles.badge}>
            {findNotebookById(notebooks, note.notebookId)?.title}
          </span>
          <span className={styles.updatedAt}>
            <span>Updated:</span>{" "}
            {(note.updatedAt && toDate(note.updatedAt)) || "<no data>"}
          </span>
          <span className={styles.updatedAt}>
            <span>Created:</span>{" "}
            {(note.createdAt && toDate(note.createdAt)) || "<no data>"}
          </span>
        </div>
        <label>
          <input
            className={styles.title}
            type="text"
            name="title"
            value={fieldsVal.title}
            onChange={onChangeNote}
            placeholder="title"
          />
        </label>
        <div className={styles.wrap_text}>
          <textarea
            onChange={onChangeNote}
            className={styles.text}
            name="text"
            value={fieldsVal.text}
            placeholder="text"
          />
        </div>
      </>
    )
  );
}

export default React.memo(TextNote);
