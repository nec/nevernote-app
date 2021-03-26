import React from "react";
import { Link } from "react-router-dom";
import styles from "./AddNotebookBtn.module.css";

const AddNotebookBtn = () => {
  return (
    <div className={styles.addnotebookbtn}>
      <Link to="/addnotebook" className={"btn-ghost " + styles.btn}>
        + Add Notebook
      </Link>
    </div>
  );
};

export default AddNotebookBtn;
