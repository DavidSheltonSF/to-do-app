import TodoItem from './TodoItem';
import styles from './todoList.module.css';

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}
