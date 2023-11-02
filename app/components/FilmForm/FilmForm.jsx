"use client";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addFilm } from "store/slices/filmsSlice";
import {
  TITLE_REQUIRED,
  TITLE_MINLENGTH,
  TITLE_MAXLENGTH,
  DIR_REQUIRED,
  DIR_MINLEGTH,
  DIR_MAXLENGTH,
  YEAR_REQUIRED,
  YEAR_REG,
  YEAR_FORMAT,
  POSTER_REQUIRED,
  POSTER_REG,
  POSTER_FORMAT,
} from "utils/constants";
import styles from "./FilmForm.module.scss";

export default function FilmForm({ title, name, submitText }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  function submitForm(data) {
    const newFilm = {
      id: nanoid(),
      title: data.title,
      director: data.director,
      year: data.year,
      poster: data.poster,
    };
    dispatch(addFilm(newFilm));
    // setTimeout(() => {
      
    // }, 300);
  }

  return (
    <form
      className={styles.root}
      name={name}
      onSubmit={handleSubmit(submitForm)}
    >
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.line} />
      <input
        className={styles.input}
        type="text"
        name="title"
        maxLength={51}
        placeholder="Введите название фильма"
        {...register("title", {
          required: TITLE_REQUIRED,
          minLength: {
            value: 2,
            message: TITLE_MINLENGTH,
          },
          maxLength: {
            value: 50,
            message: TITLE_MAXLENGTH,
          },
        })}
      />
      <span className={styles.error}>
        {errors?.title && errors?.title?.message}
      </span>

      <input
        className={styles.input}
        type="text"
        name="director"
        maxLength={41}
        placeholder="Введите имя режиссера фильма"
        {...register("director", {
          required: DIR_REQUIRED,
          minLength: {
            value: 3,
            message: DIR_MINLEGTH,
          },
          maxLength: {
            value: 40,
            message: DIR_MAXLENGTH,
          },
        })}
      />
      <span className={styles.error}>
        {errors?.director && errors?.director?.message}
      </span>

      <input
        className={styles.input}
        type="text"
        name="year"
        maxLength={4}
        placeholder="Введите год выхода фильма"
        {...register("year", {
          required: YEAR_REQUIRED,
          pattern: {
            value: YEAR_REG,
            message: YEAR_FORMAT,
          },
        })}
      />
      <span className={styles.error}>
        {errors?.year && errors?.year?.message}
      </span>

      <input
        className={styles.input}
        type="text"
        name="poster"
        placeholder="Введите ссылку на постер фильма"
        {...register("poster", {
          required: POSTER_REQUIRED,
          pattern: {
            value: POSTER_REG,
            message: POSTER_FORMAT,
          },
        })}
      />
      <span className={styles.error}>
        {errors?.poster && errors?.poster?.message}
      </span>

      <div className={styles["buttons-container"]}>
        <button
          type="submit"
          className={`${styles.submit} ${!isValid && styles.inactive}`}
          disabled={!isValid}
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}
