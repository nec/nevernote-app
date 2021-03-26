import {
  FETCH_NOTES,
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_SUCCESS,
  SORT_NOTES,
  SET_ACTIVE_NOTE,
  DELETE_NOTE,
  ADD_NOTE,
  TOGGLE_FAVORITE
} from "./actionsTypes";

export const fetchNotes = () => ({ type: FETCH_NOTES });

export const fetchNotesSuccess = payload => ({
  type: FETCH_NOTES_SUCCESS,
  payload
});

export const fetchNotesFailure = payload => ({
  type: FETCH_NOTES_FAILURE,
  payload
});

export const sortNotesBy = payload => ({
  type: SORT_NOTES,
  payload: payload
});

export const setActiveNote = payload => ({
  type: SET_ACTIVE_NOTE,
  payload
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: id
});

export const addNote = noteData => ({
  type: ADD_NOTE,
  payload: noteData
});

export const toggleFavoriteNote = (noteId, favStatus) => ({
  type: TOGGLE_FAVORITE,
  payload: { noteId, favStatus }
});
