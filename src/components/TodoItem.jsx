import styles from './todoitem.module.css';

export default function TodoItem({ item, todos, setTodos }) {
  function handleCheck(item) {
    const updatedTodos = todos.map((todo) => {
      return todo.id === item.id ? { ...todo, done: !todo.done } : todo;
    });
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }
  function handleDelete(item) {
    const updatedTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(updatedTodos);
  }

  return (
    <article className={styles.itemContainer}>
      <div className={styles.item}>
        <span
          className={styles.itemContent}
          data-checked={item.done ? 'true' : 'false'}
          onClick={() => handleCheck(item)}
        >
          {item.content}
        </span>
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
