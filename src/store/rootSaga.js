import { all } from "redux-saga/effects";
import { sagaNotebooksWatcher } from "./notebooks/sagas";
import { sagaNotesWatcher } from "./notes/sagas";
import { sagaTextNoteWatcher } from "./textnote/sagas";

export function* rootSaga() {
  yield all([
    sagaNotebooksWatcher(),
    sagaNotesWatcher(),
    sagaTextNoteWatcher()
  ]);
}
