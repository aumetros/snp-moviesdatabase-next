"use client";
import Modal from "./Modal";
import FilmForm from "components/FilmForm";
import { useSelector } from "react-redux";

export default function ModalAddFilm() {
  const addModal = useSelector((state) => state.modals.find((modal) => modal.name === "addFilm"));

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
