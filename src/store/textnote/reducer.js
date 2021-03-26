import { UPDATE_NOTE } from "./actionsTypes";

export const initialStateTextNote = {
  payload: {}
};

export const textnoteReducer = (state = initialStateTextNote, action) => {
  switch (action.type) {
    case UPDATE_NOTE:
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  }
};
