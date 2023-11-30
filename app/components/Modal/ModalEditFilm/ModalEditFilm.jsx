"use client"
import Modal from "components/Modal";
import FilmForm from "components/FilmForm";
import { useSelector } from "react-redux";
import { selectModals, selectPreview } from "store/selectors";
import { useDispatch } from "react-redux";

export default function ModalEditFilm() {
  const film = useSelector(selectPreview);
  const modals = useSelector(selectModals);

  return (
    <Modal isOpen={modals.editFilm}>
      <FilmForm
        title="Редактирование данных фильма"
        name="filmEdit"
        submitText="Добавить"
        mode="edit"
        film={film}
      />
    </Modal>
  );
}
