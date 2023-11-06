"use client";

import React from "react";
import Modal from "./Modal";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectPreviewModal, selectPreview } from "store/selectors";

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
          <h2 className="modal__fastview-title">
            Быстрый просмотр данных фильма
          </h2>
          <hr className="modal__line" />
          <div className="modal__fastview">
            <Image
              className="modal__poster"
              src={film.poster || "/no-poster.jpg"}
              alt={`Постер фильма ${film.title}` || "Постера нет"}
              width={170}
              height={220}
              // onError={onError}
            />
            <div className="modal__film-details">
              <h3 className="modal__film-detail-title">Название фильма:</h3>
              <p className="modal__film-detail">{film.title}</p>
              <h3 className="modal__film-detail-title">Режиссер фильма:</h3>
              <p className="modal__film-detail">{film.director}</p>
              <h3 className="modal__film-detail-title">Год создания фильма:</h3>
              <p className="modal__film-detail">{film.year}</p>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
