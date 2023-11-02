import { createSelector } from "@reduxjs/toolkit";

/**Селекторы модальных окон */
export const selectModals = (state) => state.modals;

export const selectAddModal = createSelector(selectModals, (modals) =>
  modals.find((modal) => modal.name === "addFilm")
);

/**Селекторы фильмов */
export const selectFilms = (state) => state.films;