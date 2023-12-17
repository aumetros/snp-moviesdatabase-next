import Image from "next/image";
import styles from "./FilmPage.module.scss";

export default function FilmPage({ params }) {
  return (
<section className={styles.root}>
      <h2 className={styles.title}>Информация о фильме</h2>
      <div className={styles.container}>
        <figure className={styles.figure}>
          <Image
            className={styles.poster}
            src={filmForDetails.poster}
            alt={`Постер фильма ${filmForDetails.title}`}
            width={300}
            height={400}
          />

          <figcaption className={styles.caption}>{`Постер фильма "${filmForDetails.title}"`}</figcaption>
        </figure>
        <div className={styles.description}>
          <p className={styles['description-title']}>Название фильма:</p>
          <p className={styles['description-text']}>{filmForDetails.title}</p>
          <p className={styles['description-title']}>Режиссер фильма:</p>
          <p className={styles['description-text']}>{filmForDetails.director}</p>
          <p className={styles['description-title']}>Год создания фильма:</p>
          <p className={styles['description-text']}>{filmForDetails.year}</p>
        </div>
      </div>
      <div className={styles.return}>
        <button type="button" className={styles['return-btn']} onClick={() => navigate(-1)}></button>
      </div>
      
    </section>
  )
}