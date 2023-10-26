import styles from "./FilmsList.module.scss";

export default function FilmsList() {
  return (
    <ul className={styles.root}>
      {films.filter(searchFilms(filter)).map((film) => {
        return (
          <Film key={film.id} film={film} onView={onView} onEdit={onEdit} />
        );
      })}
    </ul>
  )
}