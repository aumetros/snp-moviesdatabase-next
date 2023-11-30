"use client"
import Modal from "components/Modal";
import FilmForm from "components/FilmForm";
import { useSelector } from "react-redux";
import { selectModals } from "store/selectors";
import { useDispatch } from "react-redux";

export default function ModalEditFilm() {
  const modals = useSelector(selectModals);
  const dispatch = useDispatch();
  return (
    <Modal isOpen={modals.editFilm}>
      <FilmForm
        title="Редактирование данных фильма"
        name="filmEdit"
        submitText="Добавить"
      />
    </Modal>
  );
}
