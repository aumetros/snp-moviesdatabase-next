"use client";
import { useForm } from "react-hook-form";
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



  return (
    <form
      className={styles.root}
      name={name}
      onSubmit={handleSubmit((data) => console.log(data))}
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
          required: "Название фильма обязательно к заполнению.",
          minLength: {
            value: 2,
            message: "Название должно содержать минимум 2 символа."
          },
          maxLength: {
            value: 50,
            message: "Название фильма должно быть не длинее 50 символов."
          }
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
          required: "Имя режиссера обязательно к заполнению.",
          minLength: {
            value: 3,
            message: "Имя режиссера должно содержать не менее 3 символов."
          },
          maxLength: {
            value: 40,
            message: "Имя режиссера должно быть не длинее 40 символов."
          }
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
        placeholder="Введите год создания фильма"
        {...register("year", {
          required: "Год выхода фильма обязателен к заполнению.",
          pattern: {
            value: /^[12][0-9]{3}$/,
            message: "Год выхода фильма должен быть в формате ГГГГ."
          }
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
          required: "Ссылка на постер фильма обязательна к заполнению.",
          pattern: {
            value: /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g,
            message: "Необходимо ввести ссылку.",
          }
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
