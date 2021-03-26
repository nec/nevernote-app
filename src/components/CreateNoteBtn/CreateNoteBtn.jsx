import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "./CreateNoteBtn.module.css";

function CreateNoteBtn() {
  const match = useRouteMatch("/notebooks/:notebookId");
  let notebookId = match?.params.notebookId || 1;

  return (
    <div className={styles.createnote}>
      <Link to={`/create/${notebookId}`} className="btn-ghost">
        + Create Note
      </Link>
    </div>
  );
}

export default CreateNoteBtn;
