export const selectNotesState = state => state.notes;
export const selectNotes = state => state.notes.payload;
export const selectSortTypee = state => state.notes.sortType;
export const selectIsLoadingNote = state => state.notes.isLoading;
export const selectErrorNote = state => state.notes.error;
export const selectActiveNote = state => state.notes.activeNote;
