"use client";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmsSlice.js";
import modalsReducer from "./slices/modalsSlice.js";
import filtersReducer from "./slices/filtersSlice.js";
import errorsReducer from "./slices/errorsSlice.js";
import { sagas } from "./sagas.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    films: filmsReducer,
    modals: modalsReducer,
    filters: filtersReducer,
    errors: errorsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;
