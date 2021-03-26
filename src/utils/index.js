export const toDate = timestamp => {
  if (typeof timestamp != "number" && !Number.isNaN(timestamp)) return "";
  return new Date(timestamp * 1000).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
};

export const findNotebookById = (notebooks, id) => {
  return notebooks.find(notebook => notebook.id === Number(id));
};

export const getNotesByNotebookId = (notes, notebookId) => {
  return notes.filter(o => o.notebookId === Number(notebookId)) || [];
};

export const debounce = (fn, interval) => {
  var timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(fn.apply.bind(fn, this, arguments), interval);
  };
};

export const typeSort = {
  UPDATED_DESC: "updatedDesc",
  UPDATED_ASC: "updatedAsc",
  CREATED_DESC: "createdDesc",
  CREATED_ASC: "createdAsc",
  TITLE_DESC: "titleDesc",
  TITLE_ASC: "titleAsc"
};

export const sorterNotes = (notes, typeSort) => {
  switch (typeSort) {
    case "updatedDesc":
      return [...notes].sort((a, b) => b.updatedAt - a.updatedAt);
    case "updatedAsc":
      return [...notes].sort((a, b) => a.updatedAt - b.updatedAt);
    case "createdDesc":
      return [...notes].sort((a, b) => b.createdAt - a.createdAt);
    case "createdAsc":
      return [...notes].sort((a, b) => a.createdAt - b.createdAt);
    case "titleDesc":
      return [...notes].sort((a, b) => b.title.localeCompare(a.title));
    case "titleAsc":
      return [...notes].sort((a, b) => a.title.localeCompare(b.title));
    default:
      return notes;
  }
};
