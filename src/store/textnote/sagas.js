import { call, put, takeLatest } from "redux-saga/effects";
import { fetchNotes } from "../notes/actions";
import { showNotification } from "../notification/actions";
import { UPDATE_NOTE } from "./actionsTypes";
import * as API from "../../api";

export function* updateNoteSaga(action) {
  try {
    const [noteId, fields] = action.payload;
    const response = yield call(API.updateNoteFields, noteId, fields);

    if (response.ok) {
      yield put(fetchNotes());
      yield put(showNotification.success("Successful saved!"));
    } else {
      yield put(showNotification.error("Error: " + response.statusText));
    }
  } catch (e) {
    yield put(showNotification.error("Error: " + e.message));
  }
}

export function* sagaTextNoteWatcher() {
  yield takeLatest(UPDATE_NOTE, updateNoteSaga);
}
