import { useState } from 'react';
import styles from './form.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({
    id: '',
    content: '',
    done: false,
    createdAt: undefined,
  });

  function HandleSubmit(e) {
    e.preventDefault();
    if (todo.content !== '') {
      setTodos([
        ...todos,
        { ...todo, id: uuidv4(), content: todo.content, createdAt: new Date() },
      ]);
      setTodo({ ...todo, content: '' });
    }
  }

  return (
    <form className={styles.todoform} action="">
      <div className={styles.inputContainer}>
        <input
          className={styles.todoInput}
          value={todo.content}
          onChange={(e) => setTodo({ ...todo, content: e.target.value })}
          type="text"
          placeholder="Enter todo task..."
        />
        <button
          className={styles.submitTodoButton}
          type="submit"
          onClick={(e) => HandleSubmit(e)}
        >
          Add
        </button>
      </div>
    </form>
  );
}
