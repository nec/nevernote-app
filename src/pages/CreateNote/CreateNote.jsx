import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import styles from "./CreateNote.module.css";

import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/notes/actions";
import { selectActiveNotebook } from "../../store/notebooks/selectors";

function CreateNote() {
  const [inputData, setInputData] = React.useState("");
  const [textareaData, setTextareaData] = React.useState("");
  const dispatch = useDispatch();

  const activeNotebook = useSelector(selectActiveNotebook);

  const history = useHistory();

  const match = useRouteMatch("/create/:notebookId");
  let notebookId = Number(match?.params.notebookId) || 1;

  const handleInput = e => {
    setInputData(e.target.value);
  };
  const handleTextarea = e => {
    setTextareaData(e.target.value);
  };
  const onSubmitNote = e => {
    dispatch(addNote({ inputData, textareaData, notebookId }));
    history.push(`/notebooks/${notebookId}`);
    e.preventDefault();
  };
  return (
    <div className={styles.createNoteBody}>
      <h1>
        Create Note <span>in {activeNotebook?.title || "<no notebook>"}</span>
      </h1>
      <form action="#" onSubmit={onSubmitNote} className={styles.createForm}>
        <label>
          <input
            type="text"
            value={inputData}
            onChange={handleInput}
            placeholder="Note Title"
            required
          />
        </label>
        <label>
          <textarea
            value={textareaData}
            onChange={handleTextarea}
            placeholder="Note Text"
          />
        </label>
        <button className="btn-ghost">Save</button>
      </form>
    </div>
  );
}

export default CreateNote;
