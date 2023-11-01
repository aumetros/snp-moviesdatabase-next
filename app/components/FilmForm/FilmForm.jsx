"use client"
import { useForm } from "react-hook-form";
import styles from "./FilmForm.module.scss";

export default function FilmForm({ title, name, submitText }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <form className={styles.root} name={name} onSubmit={handleSubmit((data) => console.log(data))}>
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.line} />
      <input
        className={styles.input}
        type="text"
        name="filmTitle"
        placeholder="Введите название фильма"
        {...register("filmTitle")}
      />
      <span className={styles.error}>Ошибка.</span>

      <input
        className={styles.input}
        type="text"
        name="filmDirector"
        placeholder="Введите имя режиссера фильма"
        {...register("filmDirector")}
      />
      <span className={styles.error}>Ошибка.</span>

      <input
        className={styles.input}
        type="text"
        name="filmDate"
        placeholder="Введите год создания фильма"
        {...register("filmDate")}
      />
      <span className={styles.error}>Ошибка.</span>

      <input
        className={styles.input}
        type="text"
        name="filmPoster"
        placeholder="Введите ссылку на постер фильма"
        {...register("filmPoster")}
      />
      <span className={styles.error}>Ошибка.</span>
      <div className={styles["buttons-container"]}>
        <button
          type="submit"
          className={`${styles.submit} ${false && styles.inactive}`}
          disabled={false}
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}
