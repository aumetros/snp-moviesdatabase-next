"use client";
import { createSlice, createAction } from "@reduxjs/toolkit";
import {
  GET_FILMS,
  ADD_FILM,
  EDIT_EXIST_FILM,
  DELETE_EXIST_FILM,
} from "utils/constants";

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

export const getFilms = createAction(GET_FILMS);
export const addFilm = createAction(ADD_FILM);
export const editExistFilm = createAction(EDIT_EXIST_FILM);
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
