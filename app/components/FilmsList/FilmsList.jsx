import Film from "components/Film";
import styles from "./FilmsList.module.scss";

export default function FilmsList() {
  return (
    <ul className={styles.root}>
      {/* {films.filter(searchFilms(filter)).map((film) => {
        return ( */}
          <Film />
        {/* ); */}
      {/* })} */}
    </ul>
  )
}