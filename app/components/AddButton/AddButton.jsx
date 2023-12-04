"use client";
import { useDispatch } from "react-redux";
import { openModal } from "store/slices/modalsSlice";
import Button from "components/Button";

export default function AddButton() {
  const dispatch = useDispatch();

  function handleOpenAddModal() {
    dispatch(openModal("addFilm"));
  }

  return (
    <Button
      type="button"
      onClick={handleOpenAddModal}
      buttonText="+"
      mode={["mode_add"]}
    />
  );
}
 