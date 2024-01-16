"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiError: "",
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setError(state, { payload }) {
      state.apiError = payload;
    },
  },
});

export const { setError } = errorsSlice.actions;

export default errorsSlice.reducer;
