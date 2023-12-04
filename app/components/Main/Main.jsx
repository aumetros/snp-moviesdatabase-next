import styles from "./Main.module.scss";

export default function Main({ children }) {
  return (
    <main className={styles.root}>
      {children}
    </main>
  )
}