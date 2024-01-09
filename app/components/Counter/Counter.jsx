"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectFilms } from "store/selectors";

export default function Counter() {
  const films = useSelector(selectFilms);

  return <>{films?.length || 0}</>;
}
