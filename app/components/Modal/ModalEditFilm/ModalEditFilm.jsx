"use client";
import Modal from "components/Modal";
import FilmForm from "components/FilmForm";
import { useSelector } from "react-redux";
import { selectModals, selectPreview } from "store/selectors";
import { closeModal } from "store/slices/modalsSlice";
import { editFilm } from "store/slices/filmsSlice";
import { useDispatch } from "react-redux";

export default function ModalEditFilm() {
  const film = useSelector(selectPreview);
  const modals = useSelector(selectModals);

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(editFilm({ filmId: film.id, data }));
    dispatch(closeModal());
  }

  function deleteFilm() {}

  return (
    <Modal isOpen={modals.editFilm}>
      <FilmForm
        title="Редактирование данных фильма"
        name="filmEdit"
        submitText="Сохранить"
        mode="edit"
        film={film}
        onSubmit={submitForm}
        onDelete={deleteFilm}
      />
    </Modal>
  );
}
