"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  preview: {},
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilms(state, { payload }) {
      state.entities = payload.entities;
    },
    addFilm(state, { payload }) {
      state.entities.push(payload);
      localStorage.setItem("filmsState", JSON.stringify(state));
    },
    setPreview(state, { payload }) {
      state.preview = payload;
    },
    editFilm(state, { payload }) {
      const { filmId, data } = payload;
      const film = state.entities.find((film) => film.id === filmId);
      if (film) {
        film.title = data.title;
        film.director = data.director;
        film.year = data.year;
        film.poster = data.poster;
      }
      localStorage.setItem("filmsState", JSON.stringify(state));
    },
  },
});

export const { setFilms, addFilm, setPreview, editFilm } = filmsSlice.actions;

export default filmsSlice.reducer;
