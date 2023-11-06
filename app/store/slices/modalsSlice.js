'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "addFilm",
    isOpen: false,
  },
  {
    name: "previewFilm",
    isOpen: false,
  },
];

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal(state, { payload }) {
      return state.map((modal) => {
        if (modal.name === payload) {
          return {
            ...modal,
            isOpen: true,
          };
        }
        return modal;
      });
    },
    closeModal(state) {
      return state.map((modal) => {
        return {
          ...modal,
          isOpen: false,
        };
      });
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
