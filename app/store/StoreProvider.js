"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "store";
import { setFilms } from "./slices/filmsSlice";

export default function StoreProvider({ films, children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(setFilms(films));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
