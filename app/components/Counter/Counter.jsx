"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilms } from "store/selectors";
import { getFilms } from "store/slices/filmsSlice";

export default function Counter() {
  const films = useSelector(selectFilms);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return <>{films?.length || 0}</>;
}
