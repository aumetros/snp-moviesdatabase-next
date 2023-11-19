"use client";
import React from "react";
import Film from "components/Film";
import { useSelector, useDispatch } from "react-redux";
import { selectFilms } from "store/selectors";
import { setFilms } from "store/slices/filmsSlice";
import styles from "./FilmsList.module.scss";

export default function FilmsList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("filmsState") !== null) {
      dispatch(setFilms(JSON.parse(localStorage.getItem("filmsState"))));
    }
  }, [dispatch]);

  const films = useSelector(selectFilms);
  return (
    <ul className={styles.root}>
      {films.map((film) => {
        return <Film key={film.id} film={film} />;
      })}
    </ul>
  );
}
