"use client";
import React from "react";
import Modal from "../Modal";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectPreviewModal, selectPreview } from "store/selectors";
import styles from "./ModalPreviewFilm.module.scss";

export default function ModalPreviewFilm() {
  const previewModal = useSelector(selectPreviewModal);
  const film = useSelector(selectPreview);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient ? (
        <Modal isOpen={previewModal.isOpen}>
          <h2 className={styles.title}>
            Быстрый просмотр данных фильма
          </h2>
          <hr className={styles.line} />
          <div className={styles.container}>
            <Image
              className={styles.poster}
              src={film.poster || "/no-poster.jpg"}
              alt={`Постер фильма ${film.title}` || "Постера нет"}
              width={170}
              height={220}
              // onError={onError}
            />
            <div className={styles.details}>
              <h3 className={styles['detail-title']}>Название фильма:</h3>
              <p className={styles.detail}>{film.title}</p>
              <h3 className={styles['detail-title']}>Режиссер фильма:</h3>
              <p className={styles.detail}>{film.director}</p>
              <h3 className={styles['detail-title']}>Год создания фильма:</h3>
              <p className={styles.detail}>{film.year}</p>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
