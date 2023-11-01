import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./filmsSlice.js";
import modalsReducer from "./modalsSlice.js";

export default configureStore({
  reducer: {
    films: filmsReducer,
    modals: modalsReducer,
  },
});
