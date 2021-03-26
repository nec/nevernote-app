import React from "react";
import { useDispatch } from "react-redux";

import HeartIcon from "../HeartIcon/HeartIcon";
import RemoveIcon from "../RemoveIcon/RemoveIcon";
import styles from "./DotsList.module.css";
import useClickOutside from "../../hooks/useClickOutside";
import { deleteNote, toggleFavoriteNote } from "../../store/notes/actions";

const DotsList = ({ noteId, isFavorite, coord, setIsShowDotsMenu }) => {
  const ref = React.useRef();
  const dispatch = useDispatch();

  useClickOutside(ref, () => setIsShowDotsMenu(false));

  const toggleFavorites = e => {
    dispatch(toggleFavoriteNote(noteId, !isFavorite));
    setIsShowDotsMenu(false);
    e.stopPropagation();
  };

  const removeNote = e => {
    dispatch(deleteNote(noteId));
    e.stopPropagation();
  };

  return (
    <ul
      ref={ref}
      className={styles.list}
      style={{ left: coord.x, top: coord.y }}
    >
      <li onClick={toggleFavorites}>
        <HeartIcon
          color={isFavorite ? "#a37272" : "#00ff7f"}
          breaking={isFavorite}
          width="1.2em"
        />
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </li>
      <li onClick={removeNote}>
        <RemoveIcon width="1.2em" />
        Remove note
      </li>
    </ul>
  );
};
export default DotsList;
