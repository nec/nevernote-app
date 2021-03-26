import React from "react";
import { Link } from "react-router-dom";

import styles from "./Notebooks.module.css";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

function Notebooks({ notebooks, isLoading, error, notebookId }) {
  return (
    <div className={styles.notebooks}>
      <div className={styles.title}>Notebooks:</div>
      {error && <Error error={error} />}
      {isLoading && <Loading />}
      {!error && !isLoading && (
        <ul className={styles.list}>
          {notebooks.map(el => {
            return (
              <li key={el.id} className={styles.listitem}>
                <Link
                  to={`/notebooks/${el.id}`}
                  className={el.id === Number(notebookId) ? styles.active : ""}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.25)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  {"   "}
                  {el.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default React.memo(Notebooks);
