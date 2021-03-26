import { combineReducers } from "redux";
import { notebooksReducer } from "./notebooks/reducer";
import { notesReducer } from "./notes/reducer";
import { textnoteReducer } from "./textnote/reducer";
import { notificationReducer } from "./notification/reducer";

export const rootReducer = combineReducers({
  notebooks: notebooksReducer,
  notes: notesReducer,
  textnote: textnoteReducer,
  notification: notificationReducer
});
