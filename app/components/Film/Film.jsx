import ViewButton from "components/ViewButton";
import styles from "./Film.module.scss";

export default function Film({ film }) {
  return (
    <li className={styles.root}>
      <div className={styles.container}>
      <div className={styles.bullet}></div>
      <p className={styles.title}>{`${film.title} / (${film.year})`}</p>
      </div>
      <div className={styles.actions}>
        <ViewButton film={film} />
      </div>
    </li>
  );
}
