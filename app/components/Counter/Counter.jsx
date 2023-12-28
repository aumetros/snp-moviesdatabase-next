"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilms } from "store/selectors";
import { setFilms } from "store/slices/filmsSlice";

export default function Counter() {
  const dispatch = useDispatch();

  const films = useSelector(selectFilms);

  React.useEffect(() => {
    if (localStorage.getItem("filmsState") !== null) {
      dispatch(setFilms(JSON.parse(localStorage.getItem("filmsState"))));
    }
  }, [dispatch]);

  return <>{films.length || 0}</>;
}
