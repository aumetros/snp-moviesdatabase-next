import { createSelector } from "@reduxjs/toolkit";

export const selectModals = (state) => state.modals;

export const selectAddModal = createSelector(selectModals, (modals) =>
  modals.find((modal) => modal.name === "addFilm")
);
