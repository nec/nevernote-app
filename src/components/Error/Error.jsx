import React from "react";
import styles from "./Error.module.css";

const Error = ({ error }) => {
  return (
    <div className={styles.errorText}>
      An error occured, please refresh the page
      <br />[ {error} ]
    </div>
  );
};

export default Error;
