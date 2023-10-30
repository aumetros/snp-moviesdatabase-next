import styles from "./Modal.module.scss";

export default function Modal({ children, isOpen }) {
  return (
    <aside className={`${styles.root} ${isOpen && styles.opened}`} >
      <div className={styles.container}>
        {children}
        <button type="button" className={styles.close} ></button>
      </div>
    </aside>
  )
}