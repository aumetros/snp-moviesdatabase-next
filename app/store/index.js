"use client";
import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmsSlice.js";
import modalsReducer from "./slices/modalsSlice.js";
import filtersReducer from "./slices/filtersSlice.js";

export const makeStore = () => {
  return configureStore({
    reducer: {
      films: filmsReducer,
      modals: modalsReducer,
      filters: filtersReducer,
    },
  });
};
