import { put, takeEvery } from "redux-saga/effects";
import {
  addFilmToDB,
  editFilmInDB,
  deleteFilmInDB,
  getFilmsApi,
} from "utils/api";
import {
  setFilms,
  addNewFilm,
  editFilm,
  deleteFilm,
  handleFilmError,
} from "./slices/filmsSlice";
import {
  GET_FILMS,
  ADD_FILM,
  EDIT_EXIST_FILM,
  DELETE_EXIST_FILM,
} from "utils/constants";

export function* getFilmsSaga() {
  try {
    const films = yield getFilmsApi();
    yield put(setFilms(films));
  } catch (err) {
    yield put(handleFilmError(err.message));
  }
}

export function* addFilmSaga({ payload }) {
  try {
    const newFilm = yield addFilmToDB(payload);
    yield put(addNewFilm(newFilm));
  } catch (err) {
    yield put(handleFilmError(err.message));
  }
}

export function* editFilmSaga({ payload }) {
  const { filmId, data } = payload;
  try {
    const film = yield editFilmInDB({ filmId, data });
    yield put(editFilm({ filmId: film.id, data }));
  } catch (err) {
    yield put(handleFilmError(err.message));
  }
}

export function* deleteFilmSaga({ payload }) {
  try {
    const film = yield deleteFilmInDB(payload);
    yield put(deleteFilm(film.id));
  } catch (err) {
    yield put(handleFilmError(err.message));
  }
}

export function* sagas() {
  yield takeEvery(GET_FILMS, getFilmsSaga);
  yield takeEvery(ADD_FILM, addFilmSaga);
  yield takeEvery(EDIT_EXIST_FILM, editFilmSaga);
  yield takeEvery(DELETE_EXIST_FILM, deleteFilmSaga);
}
