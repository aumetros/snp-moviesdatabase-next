"use client";
import { useRouter } from "next/navigation";
import Counter from "components/Counter";
import AddButton from "components/AddButton";
import { useDispatch } from "react-redux";
import { setFilter } from "store/slices/filtersSlice";
import styles from "./Header.module.scss";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  function handleLogoClick() {
    router.push("/");
    dispatch(setFilter(""));
  }
  return (
    <header className={styles.root}>
      <div className={styles["logo-container"]} onClick={handleLogoClick}>
        <div className={styles.logo}></div>
        <div className={styles["title-container"]}>
          <h1 className={styles.title}>Movies Database</h1>
          <p className={styles.subtitle}>Add a little salt and pepper.</p>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Всего фильмов в базе данных
          <span className={styles["counter-mob"]}>
            : <Counter />
          </span>
        </p>
        <span className={styles.counter}>
          <Counter />
        </span>
        <AddButton />
      </div>
    </header>
  );
}
