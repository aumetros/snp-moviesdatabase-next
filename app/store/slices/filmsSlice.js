"use client"
import { createSlice } from "@reduxjs/toolkit";

const films = localStorage.getItem("filmsState")
  ? JSON.parse(localStorage.getItem("filmsState"))
  : [];

const initialState = films;

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    addFilm(state, { payload }) {
      state.push(payload);
      localStorage.setItem("filmsState", JSON.stringify(state));
    },
  },
});

export const { addFilm } = filmsSlice.actions;

export default filmsSlice.reducer;
