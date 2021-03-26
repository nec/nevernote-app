import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout/Layout";
import SidebarNotebooks from "./components/SidebarNotebooks/SidebarNotebooks";

import Main from "./pages/Main/Main";
import Settings from "./pages/Settings/Settings";
import NoMatch from "./pages/NoMatch/NoMatch";
import CreateNote from "./pages/CreateNote/CreateNote";
import AddNotebook from "./pages/AddNotebook/AddNotebook";
import { fetchNotebooks } from "./store/notebooks/actions";
import { fetchNotes } from "./store/notes/actions";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchNotebooks());
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <Layout>
      <SidebarNotebooks />
      <Switch>
        <Redirect exact from="/" to="/notes" />
        <Route
          path={[
            "/notebooks/:notebookId/notes/:noteId?",
            "/notebooks/:notebookId?",
            "/notes/:noteId?",
            "/favorites/:noteId?"
          ]}
          component={Main}
        />
        <Route path="/create/:notebookId" component={CreateNote} />
        <Route path="/addnotebook" component={AddNotebook} />
        <Route path="/settings" component={Settings} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  );
}

export default App;
