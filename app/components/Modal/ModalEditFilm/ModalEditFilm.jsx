"use client";
import Modal from "components/Modal";
import FilmForm from "components/FilmForm";
import { useSelector } from "react-redux";
import { selectModals, selectPreview } from "store/selectors";
import { closeModal } from "store/slices/modalsSlice";
import { editExistFilm, deleteExistFilm, } from "store/slices/filmsSlice";
import { useDispatch } from "react-redux";

export default function ModalEditFilm() {
  const film = useSelector(selectPreview);
  const modals = useSelector(selectModals);

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(editExistFilm({ filmId: film.id, data }));
    dispatch(closeModal());
  }

  function handleDeleteFilm() {
    dispatch(deleteExistFilm(film.id));
    dispatch(closeModal());
  }

  return (
    <Modal isOpen={modals.editFilm}>
      <FilmForm
        title="Редактирование данных фильма"
        name="filmEdit"
        submitText="Сохранить"
        mode="edit"
        film={film}
        onSubmit={submitForm}
        onDelete={handleDeleteFilm}
      />
    </Modal>
  );
}
