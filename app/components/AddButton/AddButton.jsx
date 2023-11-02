"use client";
import { useDispatch } from "react-redux";
import { openModal } from "store/slices/modalsSlice";
import styles from "./AddButton.module.scss";

export default function AddButton() {
  const dispatch = useDispatch();

  function handleOpenAddModal() {
    dispatch(openModal("addFilm"));
  }

  return (
    <button
      className={styles.root}
      onClick={handleOpenAddModal}
    ></button>
  );
}
