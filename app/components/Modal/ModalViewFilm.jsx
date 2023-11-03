import Modal from "./Modal";
import Image from "next/image";

export default function ModalViewFilm({ film, isOpen, onClose, onEsc, onError, noPoster }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} onEsc={onEsc}>
      <h2 className="modal__fastview-title">Быстрый просмотр данных фильма</h2>
      <hr className="modal__line" />
      <div className="modal__fastview">
        <Image
          className="modal__poster"
          src={film.poster || noPoster}
          alt={`Постер фильма ${film.title}` || "Постера нет"}
          onError={onError}
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
  );
}