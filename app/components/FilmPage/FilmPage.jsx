"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectFilms } from "store/selectors";
import styles from "./FilmPage.module.scss";

export default function FilmPage({ params }) {
  const films = useSelector(selectFilms);
  const router = useRouter();
  const [srcPoster, setSrcPoster] = React.useState("");

  function handleErrorPoster() {
    setSrcPoster("/no-poster.jpg");
  }

  const filmForPage = React.useMemo(
    () => films.find((film) => film.id === params.id),
    [films, params]
  );

  React.useEffect(() => {
    setSrcPoster(filmForPage?.poster);
  }, [filmForPage]);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Информация о фильме</h2>
      <div className={styles.container}>
        <figure className={styles.figure}>
          <Image
            className={styles.poster}
            src={srcPoster || "/no-poster.jpg"}
            alt={`Постер фильма ${filmForPage?.title}`}
            width={300}
            height={400}
            onError={handleErrorPoster}
            priority
          />

          <figcaption
            className={styles.caption}
          >{`Постер фильма "${filmForPage?.title}"`}</figcaption>
        </figure>
        <div className={styles?.description}>
          <p className={styles["description-title"]}>Название фильма:</p>
          <p
            className={styles["description-text"]}
          >{`"${filmForPage?.title}"`}</p>
          <p className={styles["description-title"]}>Режиссер фильма:</p>
          <p className={styles["description-text"]}>{filmForPage?.director}</p>
          <p className={styles["description-title"]}>Год создания фильма:</p>
          <p className={styles["description-text"]}>{filmForPage?.year}</p>
        </div>
      </div>
      <div className={styles.return}>
        <button
          type="button"
          className={styles["return-btn"]}
          onClick={() => router.back()}
        ></button>
      </div>
    </section>
  );
}
