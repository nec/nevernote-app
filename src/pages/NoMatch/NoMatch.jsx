import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./NoMatch.module.css";

function NoMatch() {
  let location = useLocation();
  return (
    <div className={styles.nomatch}>
      <b>No match for:</b> <code>{location.pathname}</code>
    </div>
  );
}

export default NoMatch;
