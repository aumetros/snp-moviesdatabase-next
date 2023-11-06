"use client";
import { useSelector } from "react-redux";
import { selectFilms } from "store/selectors";
import React from "react";

export default function Counter() {
  const [isClient, setIsClient] = React.useState(false)
  const films = useSelector(selectFilms);

  React.useEffect(() => {
    setIsClient(true);
  }, [])
  return (
    <>
      {isClient ? films.length : 0}
    </>
  );
}
