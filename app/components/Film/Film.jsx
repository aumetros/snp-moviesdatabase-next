"use client";
import { useRouter } from 'next/navigation';
import PreviewButton from "components/PreviewButton";
import EditButton from "components/EditButton";
import styles from "./Film.module.scss";

export default function Film({ film }) {
  const router = useRouter();

  return (
    <li className={styles.root}>
      <div className={styles.container} onClick={() => router.push(`/films/${film.id}`)}>
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
