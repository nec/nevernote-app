import React from "react";

import TextNote from "../../components/TextNote/TextNote";
import SidebarNotes from "../../components/SidebarNotes/SidebarNotes";

function Main() {
  return (
    <>
      <SidebarNotes />
      <main>
        <TextNote />
      </main>
    </>
  );
}

export default Main;
