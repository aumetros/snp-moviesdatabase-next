"use client";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "store/selectors";
import { setFilter } from "store/slices/filtersSlice";
import styles from "./Filter.module.scss";

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  function handleChangeFilter(e) {
    dispatch(setFilter(e.target.value));
  }
  return (
    <section className={styles.root}>
      <div className={styles.logo}></div>
      <input
        className={styles.input}
        type="text"
        name="filmsFilter"
        id="filmsFilter"
        value={filterValue}
        placeholder="Введите текст для поиска"
        onChange={handleChangeFilter}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Введите текст для поиска")}
      />
    </section>
  );
}
