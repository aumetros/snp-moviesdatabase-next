import styles from "./Modal.module.scss";

export default function Modal() {
  return (
    <aside className={`${styles.root} ${styles.opened}`} onClick={onClose}>
      <div className={styles.container}>
        {children}
        <button type="button" className={styles.close} onClick={onClose}></button>
      </div>
    </aside>
  )
}