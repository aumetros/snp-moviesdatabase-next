"use client";
import { createSlice, createAction } from "@reduxjs/toolkit";
import {
  addFilmToDB,
  editFilmInDB,
  deleteFilmInDB,
  getFilmsApi,
} from "utils/api";
import { put } from "redux-saga/effects";

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

const initialState = {
  entities: [],
  preview: {},
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilms(state, { payload }) {
      state.entities = payload;
    },
    addNewFilm(state, { payload }) {
      state.entities.push(payload);
    },
    setPreview(state, { payload }) {
      state.preview = payload;
    },
    editFilm(state, { payload }) {
      const { filmId, data } = payload;
      state.entities = state.entities.map((film) => {
        if (film.id === filmId) {
          return {
            ...film,
            title: data.title,
            director: data.director,
            year: data.year,
            poster: data.poster,
          };
        }
        return film;
      });
    },
    deleteFilm(state, { payload }) {
      state.entities = state.entities.filter((film) => film.id !== payload);
    },
    handleFilmError(state, { payload }) {
      console.log(payload);
    },
  },
});

export const GET_FILMS = "films/getFilms";
export const getFilms = createAction(GET_FILMS);

export const ADD_FILM = "films/addFilm";
export const addFilm = createAction(ADD_FILM);

export const EDIT_EXIST_FILM = "films/editExistFilm";
export const editExistFilm = createAction(EDIT_EXIST_FILM);

export const DELETE_EXIST_FILM = "films/deleteExistFilm";
export const deleteExistFilm = createAction(DELETE_EXIST_FILM);

export const {
  setFilms,
  addNewFilm,
  setPreview,
  editFilm,
  deleteFilm,
  handleFilmError,
} = filmsSlice.actions;

export default filmsSlice.reducer;
