import React from "react";
import ReactDOM from "react-dom";

import DotsList from "../DotsList/DotsList";

const DotsMenu = ({ note, coord, setIsShowDotsMenu }) => {
  return ReactDOM.createPortal(
    <DotsList
      noteId={note.id}
      isFavorite={note.isFavorite}
      coord={coord}
      setIsShowDotsMenu={setIsShowDotsMenu}
    />,
    document.getElementById("dotsmenu")
  );
};
export default DotsMenu;
