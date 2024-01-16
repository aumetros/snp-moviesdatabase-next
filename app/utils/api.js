import {
  DB_LINK,
  FAILED_FETCH,
  FAILED_ADD,
  FAILED_EDIT,
  FAILED_DELETE,
} from "./constants";

function checkResponse(res, message) {
  if (!res.ok) {
    throw new Error(message);
  }
  return res.json();
}

export async function getFilmsApi() {
  const res = await fetch(`${DB_LINK}/films`);

  return checkResponse(res, FAILED_FETCH);
}

export async function addFilmToDB(data) {
  const res = await fetch(`${DB_LINK}/films`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return checkResponse(res, FAILED_ADD);
}

export async function editFilmInDB({ filmId, data }) {
  const res = await fetch(`${DB_LINK}/films/${filmId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return checkResponse(res, FAILED_EDIT);
}

export async function deleteFilmInDB(filmId) {
  const res = await fetch(`${DB_LINK}/films/${filmId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return checkResponse(res, FAILED_DELETE);
}
