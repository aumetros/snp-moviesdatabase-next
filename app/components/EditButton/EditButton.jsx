import { useDispatch } from "react-redux";
import { openModal } from "store/slices/modalsSlice";
import { setPreview } from "store/slices/filmsSlice";
import Button from "components/Button";

export default function EditButton({ film }) {
  const dispatch = useDispatch();

  function handleEditClick() {
    dispatch(setPreview(film));
    dispatch(openModal("editFilm"));
  }

  return (
    <Button
      onClick={handleEditClick}
      mode={["mode_film-button", "edit"]}
    />
  );
}
