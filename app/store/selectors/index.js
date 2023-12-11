"use client";

/**Селектор модальных окон */
export const selectModals = (state) => state.modals;

/**Селектор фильмов */
export const selectFilms = (state) => state.films.entities;

/**Селектор предпросмотра фильма */
export const selectPreview = (state) => state.films.preview;

/**Селектор фильтра фильмов */
export const selectFilter = (state) => state.filters.filter;
