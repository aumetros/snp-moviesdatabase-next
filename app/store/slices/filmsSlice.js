"use client";
import { createSlice } from "@reduxjs/toolkit";

const films = localStorage.getItem("filmsState")
  ? JSON.parse(localStorage.getItem("filmsState")).films.entities
  : [];

const initialState = {
  entities: films,
  preview: {},
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    addFilm(state, { payload }) {
      state.entities.push(payload);
    },
    setPreview(state, { payload }) {
      state.preview = payload;
    },
  },
});

export const { addFilm, setPreview } = filmsSlice.actions;

export default filmsSlice.reducer;
