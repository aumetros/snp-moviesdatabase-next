"use client";
import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmsSlice.js";
import modalsReducer from "./slices/modalsSlice.js";

const store = configureStore({
  reducer: {
    films: filmsReducer,
    modals: modalsReducer,
  }
});

export default store;