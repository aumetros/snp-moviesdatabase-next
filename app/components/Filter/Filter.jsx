"use client";
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "store/selectors";
import { setFilter } from "store/slices/filtersSlice";
import { FILTER_PLACEHOLDER } from "utils/constants";
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
  }

  function handlerInputFocus(e) {
    e.target.placeholder = "";
  }

  function handlerInputBlur(e) {
    e.target.placeholder = FILTER_PLACEHOLDER;
  }

  React.useEffect(() => {
    router.push(pathname + "?" + createQueryString("search", filterValue));
  }, [filterValue, router, pathname, createQueryString]);

  React.useEffect(() => {
    if (searchParams?.has("search")) {
      dispatch(setFilter(searchParams.get("search")));
    }
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
        placeholder={FILTER_PLACEHOLDER}
        onChange={handleChangeFilter}
        onFocus={handlerInputFocus}
        onBlur={handlerInputBlur}
      />
    </section>
  );
}
