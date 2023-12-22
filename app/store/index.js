"use client";
import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmsSlice.js";
import modalsReducer from "./slices/modalsSlice.js";
import filtersReducer from "./slices/filtersSlice.js";

const store = configureStore({
  reducer: {
    films: filmsReducer,
    modals: modalsReducer,
    filters: filtersReducer,
  },
});

export default store;
