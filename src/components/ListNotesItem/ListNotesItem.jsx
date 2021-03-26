import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./ListNotesItem.module.css";
import { findNotebookById, toDate } from "../../utils";
import { selectNotebooks } from "../../store/notebooks/selectors";
import DotsMenu from "../DotsMenu/DotsMenu";

const ListNotesItem = ({ note, active }) => {
  const [isShowDotsMenu, setIsShowDotsMenu] = React.useState(false);
  const [coord, setCoord] = React.useState({ x: 0, y: 0 });
  const { notebookId } = useParams();
  const matchFavs = useRouteMatch("/favorites");

  const notebooks = useSelector(selectNotebooks);

  let newurl = notebookId
    ? "/notebooks/" + notebookId + "/notes"
    : matchFavs
    ? "/favorites"
    : "/notes";

  let classes = active ? styles.link + " " + styles.active : styles.link;

  const handleDotsMenu = e => {
    const rect = e.target.getBoundingClientRect();
    setIsShowDotsMenu(prev => !prev);
    setCoord({ x: rect.left + rect.width, y: rect.top + rect.height });
    e.preventDefault();
  };

  return (
    <Link to={`${newurl}/${note.id}`} className={classes}>
      <div className={styles.title}>{note.title}</div>
      <div className={styles.date}>updated: {toDate(note.updatedAt)}</div>
      <div className={styles.date}>created: {toDate(note.createdAt)}</div>
      <div className={styles.descr}>{note.text}</div>
      <div className={styles.meta}>
        <div className={styles.badge}>
          {findNotebookById(notebooks, note.notebookId)?.title}
        </div>
        <div
          onClick={handleDotsMenu}
          className={
            styles.ctrl + (isShowDotsMenu ? " " + styles.activedots : "")
          }
        >
          •••
        </div>
        {isShowDotsMenu && (
          <DotsMenu
            note={note}
            coord={coord}
            setIsShowDotsMenu={setIsShowDotsMenu}
          />
        )}
      </div>
    </Link>
  );
};

export default React.memo(ListNotesItem);
