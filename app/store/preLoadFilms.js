"use client";
export default function preLoadFilms() {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem("filmsState") !== null) {
      return JSON.parse(localStorage.getItem("filmsState")).films.entities;
    }
  }
};