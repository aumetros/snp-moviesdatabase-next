"use client";
import { useSelector } from "react-redux";
import { selectFilms } from "store/selectors";

export default function Counter() {
  const films = useSelector(selectFilms);
  return (
    <>
      {films.length}
    </>
  );
}
