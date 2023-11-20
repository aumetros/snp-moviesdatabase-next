"use client";
import React from "react";
import Modal from "components/Modal";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectModals, selectPreview } from "store/selectors";
import styles from "./ModalPreviewFilm.module.scss";

export default function ModalPreviewFilm() {
  const film = useSelector(selectPreview);
  const modals = useSelector(selectModals);
  const [srcPoster, setSrcPoster] = React.useState("");

  function handleErrorPoster() {
    setSrcPoster("/no-poster.jpg");
  }

  React.useEffect(() => {
    setSrcPoster(film.poster);
  }, [film]);

  return (
    <Modal isOpen={modals.previewFilm}>
      <h2 className={styles.title}>Быстрый просмотр данных фильма</h2>
      <hr className={styles.line} />
      <div className={styles.container}>
        <Image
          className={styles.poster}
          src={srcPoster || "/no-poster.jpg"}
          alt={`Постер фильма ${film.title}`}
          width={170}
          height={220}
          onError={handleErrorPoster}
        />
        <div className={styles.details}>
          <h3 className={styles["detail-title"]}>Название фильма:</h3>
          <p className={styles.detail}>{film.title}</p>
          <h3 className={styles["detail-title"]}>Режиссер фильма:</h3>
          <p className={styles.detail}>{film.director}</p>
          <h3 className={styles["detail-title"]}>Год создания фильма:</h3>
          <p className={styles.detail}>{film.year}</p>
        </div>
      </div>
    </Modal>
  );
}
