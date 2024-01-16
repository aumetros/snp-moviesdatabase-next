"use client";
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";
import filmsReducer, {
  GET_FILMS,
  getFilmsSaga,
  ADD_FILM,
  addFilmSaga,
  EDIT_EXIST_FILM,
  editFilmSaga,
  DELETE_EXIST_FILM,
  deleteFilmSaga,
} from "./slices/filmsSlice.js";
import modalsReducer from "./slices/modalsSlice.js";
import filtersReducer from "./slices/filtersSlice.js";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_FILMS, getFilmsSaga);
  yield takeEvery(ADD_FILM, addFilmSaga);
  yield takeEvery(EDIT_EXIST_FILM, editFilmSaga);
  yield takeEvery(DELETE_EXIST_FILM, deleteFilmSaga);
}

const store = configureStore({
  reducer: {
    films: filmsReducer,
    modals: modalsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;
