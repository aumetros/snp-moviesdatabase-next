"use client";
import { useDispatch } from "react-redux";
import { openModal } from "store/slices/modalsSlice";
import styles from "./Header.module.scss";

export default function Header() {
  const dispatch = useDispatch();

  function handleOpenAddModal() {
    dispatch(openModal("addFilm"));
  }

  
  return (
    <header className={styles.root}>
      <div className={styles["logo-container"]}>
        <div className={styles.logo}></div>
        <div className={styles["title-container"]}>
          <h1 className={styles.title}>Movies Database</h1>
          <p className={styles.subtitle}>Add a little salt and pepper.</p>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Всего фильмов в базе данных
          <span className={styles["counter-mob"]}>: 10</span>
        </p>
        <span className={styles.counter}>10</span>
        <button
          className={styles["add-film-btn"]}
          onClick={handleOpenAddModal}
        ></button>
      </div>
    </header>
  );
}
