"use client";
import Modal from "./Modal";
import FilmForm from "components/FilmForm";
import { useSelector } from "react-redux";
import { selectAddModal } from "store/selectors";

export default function ModalAddFilm() {
  const addModal = useSelector(selectAddModal);

  return (
    <Modal isOpen={addModal.isOpen}>
      <FilmForm
        title="Добавить новый фильм"
        name="addFilm"
        submitText="Добавить"
      />
    </Modal>
  );
}
