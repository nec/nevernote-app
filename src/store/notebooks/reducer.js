import {
  FETCH_NOTEBOOKS,
  FETCH_NOTEBOOKS_FAILURE,
  FETCH_NOTEBOOKS_SUCCESS,
  SET_ACTIVE_NOTEBOOKS
} from "./actionsTypes";

export const initialStateNotebooks = {
  isLoading: false,
  payload: [],
  error: null,
  activeNotebook: {}
};

export const notebooksReducer = (state = initialStateNotebooks, action) => {
  switch (action.type) {
    case FETCH_NOTEBOOKS:
      return {
        ...state,
        isLoading: !state.payload.length && true
      };
    case FETCH_NOTEBOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.payload
      };
    case FETCH_NOTEBOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SET_ACTIVE_NOTEBOOKS:
      return {
        ...state,
        activeNotebook: action.payload
      };
    default:
      return state;
  }
};
