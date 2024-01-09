"use client";
import { addFilm, addNewFilm } from "store/slices/filmsSlice";
import { closeModal } from "store/slices/modalsSlice";
import { useSelector } from "react-redux";
import { selectModals } from "store/selectors";
import { useDispatch } from "react-redux";
import Modal from "components/Modal";
import FilmForm from "components/FilmForm";

export default function ModalAddFilm() {
  const modals = useSelector(selectModals);
  const dispatch = useDispatch();

  function submitForm(data) {
    const newFilm = {
      title: data.title,
      director: data.director,
      year: data.year,
      poster: data.poster,
    };
    dispatch(addNewFilm(newFilm));
    dispatch(closeModal());
  }

  return (
    <Modal isOpen={modals.addFilm}>
      <FilmForm
        title="Добавить новый фильм"
        name="addFilm"
        submitText="Добавить"
        onSubmit={submitForm}
      />
    </Modal>
  ); 
}
