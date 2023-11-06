"use client";
export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("filmsState", JSON.stringify(store.getState()));
  return result;
};

