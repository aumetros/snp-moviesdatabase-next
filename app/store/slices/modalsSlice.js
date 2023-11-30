"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addFilm: false,
  previewFilm: false,
  editFilm: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal(state, { payload }) {
      state[payload] = true;
    },
    closeModal(state) {
      for (const key in state) {
        state[key] = false;
      }
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
