import styles from './todoitem.module.css';

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    const updatedTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(updatedTodos);
  }
  return (
    <article className={styles.item}>
      <div className={styles.itemName}>
        {item.content}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </article>
  );
}
