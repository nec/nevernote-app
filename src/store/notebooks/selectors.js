export const selectNotebooksState = state => state.notebooks;
export const selectNotebooks = state => state.notebooks.payload;
export const selectActiveNotebook = state => state.notebooks.activeNotebook;
export const selectIsLoadingNotebook = state => state.notebooks.isLoading;
export const selectErrorNotebook = state => state.notebooks.error;
