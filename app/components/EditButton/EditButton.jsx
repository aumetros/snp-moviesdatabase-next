import { useDispatch } from "react-redux";
import { openModal } from "store/slices/modalsSlice";
import { setPreview } from "store/slices/filmsSlice";
import Button from "components/Button";
import styles from "./EditButton.module.scss";

export default function EditButton({ film }) {
  const dispatch = useDispatch();

  function handleEditClick() {
    dispatch(setPreview(film));
    dispatch(openModal("editFilm"));
  }
  
  return (
    <Button className={styles.root} onClick={handleEditClick} />
  )
}