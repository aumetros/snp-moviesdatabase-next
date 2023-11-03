import { useDispatch } from "react-redux";
import { openModal } from "store/slices/modalsSlice";
import { setPreview } from "store/slices/filmsSlice";
import styles from "./ViewButton.module.scss";

export default function ViewButton({ film }) {

  const dispatch = useDispatch();

  function handleClickView() {
    dispatch(setPreview(film));
    dispatch(openModal("previewFilm"));
  }
  return (
    <button className={styles.root} onClick={handleClickView} />
  )
}