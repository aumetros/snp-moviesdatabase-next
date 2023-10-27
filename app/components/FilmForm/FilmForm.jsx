import styles from "./FilmForm.module.scss";

export default function FilmForm({ title, name, submitText }) {
  return (
    <form className={styles.root} name={name} >
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.line} />
      <input
        className={styles.input}
        type="text"
        name="filmTitle"
        id="filmTitle"
        placeholder="Введите название фильма"
        value={""}
 
      />
      <span className={styles.error}>Ошибка.</span>

      <input
        className={styles.input}
        type="text"
        name="filmDirector"
        id="filmAuthor"
        placeholder="Введите имя режиссера фильма"
        value={""}
       
      />
      <span className={styles.error}>Ошибка.</span>

      <input
        className={styles.input}
        type="text"
        name="filmDate"
        id="filmDate"
        placeholder="Введите год создания фильма"
        value={""}
       
      />
      <span className={styles.error}>Ошибка.</span>

      <input
        className={styles.input}
        type="text"
        name="filmPoster"
        id="filmPoster"
        placeholder="Введите ссылку на постер фильма"
        value={""}
    
      />
      <span className={styles.error}>Ошибка.</span>
      <div className={styles['buttons-container']}>
        <button
          type="submit"
          className={`${styles.submit} ${false && styles.inactive}`}
          disabled={false}
        >
          {submitText}
        </button>
        {false && (
          <button
            type="button"
            className={`${styles.submit} ${styles.delete}`}
  
          >
            Удалить
          </button>
        )}
      </div>
    </form>
  );
}
