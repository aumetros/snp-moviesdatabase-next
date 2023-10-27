import styles from "./Modal.module.scss";

export default function Modal({ children }) {
  return (
    <aside className={`${styles.root} ${styles.opened}`} >
      <div className={styles.container}>
        {children}
        <button type="button" className={styles.close} ></button>
      </div>
    </aside>
  )
}