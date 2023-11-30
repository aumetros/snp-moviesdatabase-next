import Modal from "components/Modal";
import FilmForm from "components/FilmForm";
import { useSelector } from "react-redux";
import { selectModals } from "store/selectors";

export default function ModalEditFilm() {
  return (
    <Modal isOpen={modals.addFilm}>
      <FilmForm
        title="Редактирование данных фильма"
        name="filmEdit"
        submitText="Добавить"
      />
    </Modal>
  );
}
