"use client";
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "store/selectors";
import { setFilter } from "store/slices/filtersSlice";
import styles from "./Filter.module.scss";

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const createQueryString = React.useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  function handleChangeFilter(e) {
    dispatch(setFilter(e.target.value));
    router.push(pathname + "?" + createQueryString("search", e.target.value));
  }

  React.useEffect(() => {
    searchParams?.has("search")
      ? dispatch(setFilter(searchParams.get("search")))
      : null;
  }, [dispatch, searchParams]);

  return (
    <section className={styles.root}>
      <div className={styles.logo}></div>
      <input
        className={styles.input}
        type="text"
        name="filmsFilter"
        id="filmsFilter"
        value={filterValue}
        placeholder="Введите текст для поиска"
        onChange={handleChangeFilter}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Введите текст для поиска")}
      />
    </section>
  );
}
