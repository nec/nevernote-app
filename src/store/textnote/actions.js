import { UPDATE_NOTE } from "./actionsTypes";

export const updateNote = (...data) => ({
  type: UPDATE_NOTE,
  payload: data
});
