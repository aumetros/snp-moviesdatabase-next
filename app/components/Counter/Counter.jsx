"use client";
import { useSelector } from "react-redux";
import { selectFilms } from "store/selectors";
import React from "react";

export default function Counter() {
  const films = useSelector(selectFilms);
  return (
    <>
      {films.length || 0}
    </>
  );
}
