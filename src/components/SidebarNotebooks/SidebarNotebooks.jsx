import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SidebarNotebooks.module.css";
import Notebooks from "../Notebooks/Notebooks";
import SettingsIcon from "../../pages/Settings/SettingsIcon";
import CreateNoteBtn from "../CreateNoteBtn/CreateNoteBtn";
import AddNotebookBtn from "../AddNotebookBtn/AddNotebookBtn";
import HeartIcon from "../HeartIcon/HeartIcon";

import { findNotebookById } from "../../utils/index";

import {
  selectErrorNotebook,
  selectIsLoadingNotebook,
  selectNotebooks
} from "../../store/notebooks/selectors";
import { setActiveNotebook } from "../../store/notebooks/actions";

const SidebarNotebooks = () => {
  const dispatch = useDispatch();
  const matchNotes = useRouteMatch("/notes");
  const matchFavs = useRouteMatch("/favorites");
  const matchCreate = useRouteMatch("/create/:notebookId");
  const matchNotebooks = useRouteMatch("/notebooks/:notebookId");

  const match = matchCreate || matchNotebooks;
  const notebookId = match?.params.notebookId;

  const notebooks = useSelector(selectNotebooks);
  const isLoading = useSelector(selectIsLoadingNotebook);
  const error = useSelector(selectErrorNotebook);

  React.useEffect(() => {
    dispatch(setActiveNotebook(findNotebookById(notebooks, notebookId)));
  }, [notebooks, notebookId, dispatch]);

  return (
    <aside className={styles.sidebar}>
      <CreateNoteBtn />
      <div className={styles.allnotes}>
        <Link
          to="/notes"
          className={`btn-dark ${matchNotes ? styles.active : ""}`}
        >
          All notes
        </Link>
      </div>
      <div className={styles.favsnotes}>
        <Link
          to="/favorites"
          className={`btn-dark ${matchFavs ? styles.active : ""}`}
        >
          <HeartIcon color={matchFavs ? "#202020" : "#00ff7f"} width="1em" />
          Favorites
        </Link>
      </div>
      <Notebooks
        notebooks={notebooks}
        isLoading={isLoading}
        error={error}
        notebookId={notebookId}
      />
      <AddNotebookBtn />

      <SettingsIcon />
    </aside>
  );
};

export default SidebarNotebooks;
