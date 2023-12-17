"use client";
import React from "react";
import Film from "components/Film";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { selectFilms } from "store/selectors";

import styles from "./FilmsList.module.scss";

export default function FilmsList() {
  const searchParams = useSearchParams();
  const films = useSelector(selectFilms);

  let searchFilter;

  searchParams?.has("search")
    ? (searchFilter = searchParams.get("search"))
    : (searchFilter = "");

  const filterFilms = (filter) => (film) =>
    film.title.toLowerCase().includes(filter.toLowerCase());

  const filmsList = React.useMemo(
    () => films.filter(filterFilms(searchFilter)),
    [films, searchFilter]
  );

  return (
    <ul className={styles.root}>
      {filmsList.map((film) => {
        return <Film key={film.id} film={film} />;
      })}
    </ul>
  );
}
