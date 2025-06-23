import styles from "./footer.module.css"

export default function Footer({ doneTodos, totalTodos }) {
  return <footer className={styles.Footer}>
    <span>Completed: {doneTodos}</span>
    <span>Total: {totalTodos}</span>
  </footer>
}