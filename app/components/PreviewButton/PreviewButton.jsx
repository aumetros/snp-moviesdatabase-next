import { useDispatch } from "react-redux";
import { openModal } from "store/slices/modalsSlice";
import { setPreview } from "store/slices/filmsSlice";
import styles from "./PreviewButton.module.scss";

export default function PreviewButton({ film }) {

  const dispatch = useDispatch();

  function handleClickPreview() {
    dispatch(setPreview(film));
    dispatch(openModal("previewFilm"));
  }
  return (
    <button className={styles.root} onClick={handleClickPreview} />
  )
}