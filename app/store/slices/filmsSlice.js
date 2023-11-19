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
  },
});

export const { setFilms, addFilm, setPreview } = filmsSlice.actions;

export default filmsSlice.reducer;
