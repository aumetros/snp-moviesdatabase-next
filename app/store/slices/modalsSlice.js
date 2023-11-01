import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "addFilm",
    open: false,
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
            open: true,
          };
        }
        return modal;
      });
    },
    closeModal(state) {
      return state.map((modal) => {
        return {
          ...modal,
          open: false,
        };
      });
    },
  },
});

export const { openModal, closeModal } = filmsSlice.actions;

export default modalsSlice.reducer;
