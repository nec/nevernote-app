import React from "react";
import styles from "./SortMenu.module.css";
import { useSelector } from "react-redux";
import { selectSortTypee } from "../../store/notes/selectors";

function ArrowsSort({ desc, asc }) {
  const sortType = useSelector(selectSortTypee);

  return (
    <div className={styles.arrows}>
      <span className={sortType === desc ? styles.active : undefined}>↑</span>
      <span className={sortType === asc ? styles.active : undefined}>↓</span>
    </div>
  );
}

export default ArrowsSort;
