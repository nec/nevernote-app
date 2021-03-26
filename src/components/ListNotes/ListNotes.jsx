import React from "react";

import styles from "./ListNotes.module.css";
import ListNotesItem from "../ListNotesItem/ListNotesItem";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

function ListNotes({ notes, isLoading, error, noteId }) {
  return (
    <div className={styles.overflow}>
      {error && <Error error={error} />}
      {isLoading && <Loading />}
      {!error && !isLoading && (
        <ol className={styles.list}>
          {notes.map(el => {
            return (
              <li key={el.id} className={styles.listitem}>
                <ListNotesItem note={el} active={el.id === Number(noteId)} />
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}

export default React.memo(ListNotes);
