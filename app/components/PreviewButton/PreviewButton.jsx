import { useDispatch } from "react-redux";
import { openModal } from "store/slices/modalsSlice";
import { setPreview } from "store/slices/filmsSlice";
import Button from "components/Button";
import styles from "./PreviewButton.module.scss";

export default function PreviewButton({ film }) {

  const dispatch = useDispatch();

  function handleClickPreview() {
    dispatch(setPreview(film));
    dispatch(openModal("previewFilm"));
  }
  return (
    <Button className={styles.root} onClick={handleClickPreview} />
  )
}