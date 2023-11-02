"use client";
import Film from "components/Film";
import { useSelector } from "react-redux";
import { selectFilms } from "store/selectors";
import styles from "./FilmsList.module.scss";

export default function FilmsList() {
  const films = useSelector(selectFilms);
  return (
    <ul className={styles.root}>
      {films.map((film) => {
        return <Film key={film.id} film={film} />;
      })}
    </ul>
  );
}
