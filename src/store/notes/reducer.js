import {
  FETCH_NOTES,
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_SUCCESS,
  SORT_NOTES,
  SET_ACTIVE_NOTE,
  DELETE_NOTE,
  TOGGLE_FAVORITE
} from "./actionsTypes";

import { typeSort } from "../../utils";

export const initialStateNotes = {
  isLoading: false,
  payload: [],
  error: null,
  sortType: typeSort.UPDATED_DESC,
  activeNote: null
};

export const notesReducer = (state = initialStateNotes, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        isLoading: !state.payload.length && true
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.payload
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SORT_NOTES:
      return {
        ...state,
        sortType: action.payload
      };
    case SET_ACTIVE_NOTE:
      return {
        ...state,
        activeNote: action.payload
      };
    case DELETE_NOTE:
      const filtered = state.payload.filter(note => note.id !== action.payload);
      return {
        ...state,
        payload: filtered
      };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        payload: state.payload.map(note =>
          note.id === action.payload.noteId
            ? { ...note, isFavorite: !note.isFavorite }
            : note
        )
      };
    default:
      return state;
  }
};
