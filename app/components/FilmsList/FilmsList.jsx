"use client";
import React from "react";
import Film from "components/Film";
import { useSelector } from "react-redux";
import { selectFilms } from "store/selectors";
import styles from "./FilmsList.module.scss";

export default function FilmsList() {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true);
  }, [])
  const films = useSelector(selectFilms);
  return (
    <ul className={styles.root}>
      {isClient ? films.map((film) => {
        return <Film key={film.id} film={film} />;
      }) : null}
    </ul>
  );
}
