"use client";
import React from "react";
import Film from "components/Film";
import { useSelector, useDispatch } from "react-redux";
import { selectFilms, selectFilter } from "store/selectors";
import { setFilms } from "store/slices/filmsSlice";
import styles from "./FilmsList.module.scss";

export default function FilmsList() {
  const dispatch = useDispatch();
  const films = useSelector(selectFilms);
  const searchFilter = useSelector(selectFilter);

  const filterFilms = (filter) => (film) =>
    film.title.toLowerCase().includes(filter.toLowerCase());

  const filmsList = React.useMemo(
    () => films.filter(filterFilms(searchFilter)),
    [films, searchFilter]
  );

  React.useEffect(() => {
    if (localStorage.getItem("filmsState") !== null) {
      dispatch(setFilms(JSON.parse(localStorage.getItem("filmsState"))));
    }
  }, [dispatch]);

  return (
    <ul className={styles.root}>
      {filmsList.map((film) => {
        return <Film key={film.id} film={film} />;
      })}
    </ul>
  );
}
