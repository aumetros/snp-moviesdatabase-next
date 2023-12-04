import PreviewButton from "components/PreviewButton";
import EditButton from "components/EditButton";
import styles from "./Film.module.scss";

export default function Film({ film }) {
  return (
    <li className={styles.root}>
      <div className={styles.container}>
        <div className={styles.bullet}></div>
        <p className={styles.title}>{`"${film.title}" / (${film.year})`}</p>
      </div>
      <div className={styles.actions}>
        <PreviewButton film={film} />
        <EditButton film={film} />
      </div>
    </li>
  );
}
