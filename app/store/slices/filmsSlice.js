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
      localStorage.setItem("filmsState", JSON.stringify(state));
    },
  },
});

export const { setFilms, addFilm, setPreview, editFilm } = filmsSlice.actions;

export default filmsSlice.reducer;
