import styles from "./Film.module.scss";

export default function Film() {
  return (
    <li className={styles.root}>
      <div className={styles.bullet}></div>
      <p className={styles.title}>{`Титаник / (1999)`}</p>
      <div className={styles.actions}>
        <div className={styles.details} ></div>
        <div className={styles.edit} ></div>
      </div>
    </li>
  );
}
