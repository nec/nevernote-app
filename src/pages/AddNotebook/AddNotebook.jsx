import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./AddNotebook.module.css";

import { useDispatch } from "react-redux";
import { addNotebook } from "../../store/notebooks/actions";

function AddNotebook() {
  const [inputData, setInputData] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInput = e => {
    setInputData(e.target.value);
  };

  const onSubmitNotebook = e => {
    dispatch(addNotebook({ inputData, history }));
    e.preventDefault();
  };
  return (
    <div className={styles.createNoteBody}>
      <h1>Add Notebook</h1>
      <form onSubmit={onSubmitNotebook} className={styles.createForm}>
        <label>
          <input
            type="text"
            value={inputData}
            onChange={handleInput}
            placeholder="Notebook Title"
          />
        </label>
        <button className="btn-ghost">Save</button>
      </form>
    </div>
  );
}

export default AddNotebook;
