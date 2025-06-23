import TodoItem from './TodoItem';
import styles from './todoList.module.css';

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a, b) => a.done - b.done);
  return (
    <div className={styles.todoList}>
      {sortedTodos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
