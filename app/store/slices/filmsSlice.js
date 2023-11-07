"use client";
import { createSlice } from "@reduxjs/toolkit";
import preLoadFilms from "store/preLoadFilms";

const initialState = {
  entities: preLoadFilms() || [],
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
