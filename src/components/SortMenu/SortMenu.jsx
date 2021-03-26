import React from "react";
import styles from "../SortMenu/SortMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { typeSort } from "../../utils";
import { selectSortTypee } from "../../store/notes/selectors";
import { sortNotesBy } from "../../store/notes/actions";
import ArrowsSort from "./ArrowsSort";
import useClickOutside from "../../hooks/useClickOutside";

function SortMenu({ setIsSortMenu }) {
  const dispatch = useDispatch();
  const sortType = useSelector(selectSortTypee);
  const ref = React.useRef();

  useClickOutside(ref, () => setIsSortMenu(prev => !prev));

  const handleSortNotesByUpdated = () => {
    if (sortType === typeSort.UPDATED_ASC) {
      dispatch(sortNotesBy(typeSort.UPDATED_DESC));
    } else {
      dispatch(sortNotesBy(typeSort.UPDATED_ASC));
    }
  };

  const handleSortNotesByCreated = () => {
    if (sortType === typeSort.CREATED_ASC) {
      dispatch(sortNotesBy(typeSort.CREATED_DESC));
    } else {
      dispatch(sortNotesBy(typeSort.CREATED_ASC));
    }
  };

  const handleSortNotesByTitle = () => {
    if (sortType === typeSort.TITLE_ASC) {
      dispatch(sortNotesBy(typeSort.TITLE_DESC));
    } else {
      dispatch(sortNotesBy(typeSort.TITLE_ASC));
    }
  };

  return (
    <div className={styles.sortmenu} ref={ref}>
      <p className={styles.sortmenuTitle}>Sort by</p>
      <ul className={styles.sortmenuList}>
        <li onClick={handleSortNotesByUpdated}>
          <ArrowsSort desc={typeSort.UPDATED_DESC} asc={typeSort.UPDATED_ASC} />
          Date updated
        </li>
        <li onClick={handleSortNotesByCreated}>
          <ArrowsSort desc={typeSort.CREATED_DESC} asc={typeSort.CREATED_ASC} />
          Date created
        </li>
        <li onClick={handleSortNotesByTitle}>
          <ArrowsSort desc={typeSort.TITLE_DESC} asc={typeSort.TITLE_ASC} />
          Title
        </li>
      </ul>
    </div>
  );
}

export default SortMenu;
