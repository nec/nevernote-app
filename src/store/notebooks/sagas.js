import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchNotebooks,
  fetchNotebooksFailure,
  fetchNotebooksSuccess
} from "./actions";
import { showNotification } from "../notification/actions";
import { FETCH_NOTEBOOKS, ADD_NOTEBOOK } from "./actionsTypes";
import * as API from "../../api";

export function* fetchNotebooksSaga() {
  try {
    const response = yield call(API.getNotebooks);
    const result = yield call(() => response.json());

    if (response.ok) {
      yield put(fetchNotebooksSuccess(result));
    } else {
      yield put(fetchNotebooksFailure(response.statusText));
    }
  } catch (e) {
    yield put(fetchNotebooksFailure(e.message));
  }
}

export function* addNotebookSaga(action) {
  const { history } = action.payload;
  try {
    const response = yield call(API.postNotebook, action.payload);
    const result = yield call(() => response.json());

    if (response.ok) {
      yield put(fetchNotebooks());
      yield put(showNotification.success("Successful added notebook!"));
      history.push(`/notebooks/${result.id}`);
    } else {
      yield put(showNotification.error("Error: " + response.statusText));
    }
  } catch (e) {
    yield put(showNotification.error("Error: " + e.message));
  }
}

export function* sagaNotebooksWatcher() {
  yield takeLatest(FETCH_NOTEBOOKS, fetchNotebooksSaga);
  yield takeLatest(ADD_NOTEBOOK, addNotebookSaga);
}
