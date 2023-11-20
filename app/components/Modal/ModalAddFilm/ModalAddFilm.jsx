"use client";
import Modal from "components/Modal";
import FilmForm from "components/FilmForm";
import { useSelector } from "react-redux";
import { selectModals } from "store/selectors";

export default function ModalAddFilm() {
  const modals = useSelector(selectModals);

  return (
    <Modal isOpen={modals.addFilm}>
      <FilmForm
        title="Добавить новый фильм"
        name="addFilm"
        submitText="Добавить"
      />
    </Modal>
  ); 
}
