'use client'
import { createSelector } from "@reduxjs/toolkit";

/**Селекторы модальных окон */
export const selectModals = (state) => state.modals;

export const selectAddModal = createSelector(selectModals, (modals) =>
  modals.find((modal) => modal.name === "addFilm")
);

export const selectPreviewModal = createSelector(selectModals, (modals) =>
  modals.find((modal) => modal.name === "previewFilm")
);

/**Селекторы фильмов */
export const selectFilms = (state) => state.films.entities;

export const selectPreview = (state) => state.films.preview;