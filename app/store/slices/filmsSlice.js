import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    addFilm(state, { payload }) {
      state.push(payload);
    },
  },
});

export const { addFilm } = filmsSlice.actions;

export default filmsSlice.reducer;
