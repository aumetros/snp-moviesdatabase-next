import styles from "./Film.module.scss";

export default function Film({ film }) {
  return (
    <li className={styles.root}>
      <div className={styles.bullet}></div>
      <p className={styles.title}>{`${film.title} / (${film.year})`}</p>
      <div className={styles.actions}>
        <div className={styles.details} ></div>
      </div>
    </li>
  );
}
