import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <p className={styles.author}>2023 &#128505; Алексей Шевляков</p>
      <a
        href="https://github.com/aumetros"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
}
