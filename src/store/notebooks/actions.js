import {
  FETCH_NOTEBOOKS,
  FETCH_NOTEBOOKS_FAILURE,
  FETCH_NOTEBOOKS_SUCCESS,
  SET_ACTIVE_NOTEBOOKS,
  ADD_NOTEBOOK
} from "./actionsTypes";

export const fetchNotebooks = () => ({ type: FETCH_NOTEBOOKS });

export const fetchNotebooksSuccess = payload => ({
  type: FETCH_NOTEBOOKS_SUCCESS,
  payload
});

export const fetchNotebooksFailure = payload => ({
  type: FETCH_NOTEBOOKS_FAILURE,
  payload
});

export const setActiveNotebook = payload => ({
  type: SET_ACTIVE_NOTEBOOKS,
  payload
});

export const addNotebook = payload => ({
  type: ADD_NOTEBOOK,
  payload
});
