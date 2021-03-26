import { call, put, takeLatest } from "redux-saga/effects";
import { fetchNotesFailure, fetchNotesSuccess, fetchNotes } from "./actions";
import { showNotification } from "../notification/actions";
import {
  FETCH_NOTES,
  DELETE_NOTE,
  ADD_NOTE,
  TOGGLE_FAVORITE
} from "./actionsTypes";
import * as API from "../../api";

export function* fetchNotesSaga() {
  try {
    const response = yield call(API.getNotes);
    const result = yield call(() => response.json());

    if (response.ok) {
      yield put(fetchNotesSuccess(result));
    } else {
      yield put(fetchNotesFailure(response.statusText));
    }
  } catch (e) {
    yield put(fetchNotesFailure(e.message));
  }
}

export function* deleteNoteSaga(action) {
  try {
    const response = yield call(API.deleteNote, action.payload);

    if (response.ok) {
      yield put(showNotification.success("Successful deleted!"));
    } else {
      yield put(showNotification.error("Error: " + response.statusText));
    }
  } catch (e) {
    yield put(showNotification.error("Error: " + e.message));
  }
}

export function* addNoteSaga(action) {
  try {
    const response = yield call(API.postNote, action.payload);

    if (response.ok) {
      yield put(fetchNotes());
      yield put(showNotification.success("Successful added!"));
    } else {
      yield put(showNotification.error("Error: " + response.statusText));
    }
  } catch (e) {
    yield put(showNotification.error("Error: " + e.message));
  }
}

export function* toggleFavoriteNoteSaga(action) {
  const { noteId, favStatus } = action.payload;

  try {
    const response = yield call(API.updateNoteFavs, noteId, favStatus);

    if (response.ok) {
      yield put(fetchNotes());
      const successText = favStatus
        ? "Add to favorite!"
        : "Remove from favorite!";
      yield put(showNotification.success(successText));
    } else {
      yield put(showNotification.error("Error: " + response.statusText));
    }
  } catch (e) {
    yield put(showNotification.error("Error: " + e.message));
  }
}

export function* sagaNotesWatcher() {
  yield takeLatest(FETCH_NOTES, fetchNotesSaga);
  yield takeLatest(DELETE_NOTE, deleteNoteSaga);
  yield takeLatest(ADD_NOTE, addNoteSaga);
  yield takeLatest(TOGGLE_FAVORITE, toggleFavoriteNoteSaga);
}
