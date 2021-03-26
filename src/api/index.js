const fetchApi = (url, opts = {}) => {
  return fetch(url, opts);
};

// Notes
const getNotes = async opts => {
  const url = `/notes`;
  return await fetchApi(url, opts);
};

const deleteNote = async id => {
  const opts = {
    method: "DELETE"
  };
  const url = `/notes/${id}`;
  return await fetchApi(url, opts);
};

const updateNoteFields = async (noteId, { title, text }) => {
  const opts = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      text,
      updatedAt: ~~(Date.now() / 1000)
    })
  };
  const url = `/notes/${noteId}`;
  return await fetchApi(url, opts);
};

const updateNoteFavs = async (noteId, favStatus) => {
  const opts = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      isFavorite: favStatus
    })
  };
  const url = `/notes/${noteId}`;
  return await fetchApi(url, opts);
};

// Create note
const postNote = async args => {
  const opts = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: args.inputData,
      text: args.textareaData,
      notebookId: args.notebookId,
      updatedAt: ~~(Date.now() / 1000),
      createdAt: ~~(Date.now() / 1000)
    })
  };
  const url = `/notes`;
  return await fetchApi(url, opts);
};

// Notebooks
const getNotebooks = async opts => {
  const url = `/notebooks`;
  return await fetchApi(url, opts);
};

const postNotebook = async args => {
  const opts = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: args.inputData
    })
  };
  const url = `/notebooks`;
  return await fetchApi(url, opts);
};

export {
  getNotes,
  getNotebooks,
  updateNoteFields,
  updateNoteFavs,
  postNote,
  postNotebook,
  deleteNote
};
