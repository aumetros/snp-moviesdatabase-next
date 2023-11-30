"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "components/Input";
import Button from "components/Button";
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

export default function FilmForm({
  title,
  name,
  submitText,
  onSubmit,
  mode,
  film,
}) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  function handleSubmitForm(data) {
    onSubmit(data);
    setTimeout(() => {
      reset();
    }, 200);
  }

  React.useEffect(() => {
    if (mode === "edit") {
      setValue("title", film.title);
      setValue("director", film.director);
      setValue("year", film.year);
      setValue("poster", film.poster);
    }
  }, [mode, setValue, film]);

  return (
    <form
      className={styles.root}
      name={name}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.line} />
      <Input
        type="text"
        name="title"
        register={register}
        errors={errors?.title}
        classInput={styles.input}
        classErrors={styles.error}
        maxLength={51}
        placeholder="Введите название фильма"
        validation={{
          required: TITLE_REQUIRED,
          minLength: {
            value: 2,
            message: TITLE_MINLENGTH,
          },
          maxLength: {
            value: 50,
            message: TITLE_MAXLENGTH,
          },
        }}
      />
      <Input
        type="text"
        name="director"
        register={register}
        errors={errors?.director}
        classInput={styles.input}
        classErrors={styles.error}
        maxLength={41}
        placeholder="Введите имя режиссера фильма"
        validation={{
          required: DIR_REQUIRED,
          minLength: {
            value: 3,
            message: DIR_MINLEGTH,
          },
          maxLength: {
            value: 40,
            message: DIR_MAXLENGTH,
          },
        }}
      />
      <Input
        type="text"
        name="year"
        register={register}
        errors={errors?.year}
        classInput={styles.input}
        classErrors={styles.error}
        maxLength={4}
        placeholder="Введите год выхода фильма"
        validation={{
          required: YEAR_REQUIRED,
          pattern: {
            value: YEAR_REG,
            message: YEAR_FORMAT,
          },
        }}
      />
      <Input
        type="text"
        name="poster"
        register={register}
        errors={errors?.poster}
        classInput={styles.input}
        classErrors={styles.error}
        placeholder="Введите ссылку на постер фильма"
        validation={{
          required: POSTER_REQUIRED,
          pattern: {
            value: POSTER_REG,
            message: POSTER_FORMAT,
          },
        }}
      />
      <div className={styles["buttons-container"]}>
        <Button
          type="submit"
          className={`${styles.submit} ${!isValid && styles.inactive}`}
          buttonText={submitText}
          disabled={!isValid}
        />
      </div>
    </form>
  );
}
