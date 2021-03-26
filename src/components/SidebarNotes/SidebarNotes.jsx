import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SidebarNotes.module.css";
import ListNotes from "../ListNotes/ListNotes";
import SortMenu from "../SortMenu/SortMenu";
import { getNotesByNotebookId, sorterNotes } from "../../utils";
import {
  selectErrorNote,
  selectIsLoadingNote,
  selectNotes,
  selectSortTypee
} from "../../store/notes/selectors";
import { setActiveNote } from "../../store/notes/actions";

const SidebarNotes = () => {
  const dispatch = useDispatch();
  const { noteId, notebookId } = useParams();
  const matchFavs = useRouteMatch("/favorites");

  const notesUnsorted = useSelector(selectNotes);
  const sortType = useSelector(selectSortTypee);
  const isLoading = useSelector(selectIsLoadingNote);
  const error = useSelector(selectErrorNote);

  React.useEffect(() => {
    dispatch(
      setActiveNote(notesUnsorted.find(el => el.id === Number(noteId)) || null)
    );
  }, [notesUnsorted, noteId, dispatch]);

  const notesSorted = sorterNotes(notesUnsorted, sortType);

  let notes = notebookId
    ? getNotesByNotebookId(notesSorted, notebookId)
    : matchFavs
    ? notesSorted.filter(note => note.isFavorite)
    : notesSorted;

  const [isSortMenu, setIsSortMenu] = React.useState(false);

  const handleSortMenuOpen = () => {
    setIsSortMenu(!isSortMenu);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.notespanel}>
        <div>{notes.length} notes</div>
        <div className={styles.ctrl}>
          <button onClick={handleSortMenuOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M8.183 4.625a.625.625 0 00-1.25 0V17.87L5.067 16a.625.625 0 00-.884 0 .62.62 0 000 .88l2.933 2.94c.244.244.64.244.884 0l2.933-2.94a.62.62 0 000-.88.625.625 0 00-.884 0l-1.866 1.87V4.625zM11.625 5a.625.625 0 100 1.25h8.75a.625.625 0 100-1.25h-8.75zM11 9.375c0-.345.28-.625.625-.625h6.25a.625.625 0 110 1.25h-6.25A.625.625 0 0111 9.375zm.625 3.125a.625.625 0 100 1.25h3.75a.625.625 0 100-1.25h-3.75z"
              />
            </svg>
          </button>
          {isSortMenu && <SortMenu setIsSortMenu={setIsSortMenu} />}
        </div>
      </div>
      <ListNotes
        notes={notes}
        isLoading={isLoading}
        error={error}
        noteId={noteId}
      />
    </aside>
  );
};

export default SidebarNotes;
