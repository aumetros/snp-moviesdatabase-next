"use client";
import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmsSlice.js";
import modalsReducer from "./slices/modalsSlice.js";
import { localStorageMiddleware } from "./middleware";


const store = configureStore({
  reducer: {
    films: filmsReducer,
    modals: modalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;