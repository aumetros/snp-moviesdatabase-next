import Modal from "./Modal";
import FilmForm from "components/FilmForm";

export default function ModalAddFilm() {
  return (
    <Modal isOpen={true}>
      <FilmForm
        title="Добавить новый фильм"
        name="addFilm"
        submitText="Добавить"
      />
    </Modal>
  );
}
