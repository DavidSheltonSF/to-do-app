import { useState } from 'react';
import styles from './form.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState('');

  function HandleSubmit(e) {
    e.preventDefault();
    if (todo !== '') {
      setTodos([...todos, {id: uuidv4(), content: todo}]);
      setTodo('');
    }
  }

  return (
    <form className={styles.todoform} action="">
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter todo task..."
        />
        <button
          className={styles.modernButton}
          type="submit"
          onClick={(e) => HandleSubmit(e)}
        >
          Add
        </button>
      </div>
    </form>
  );
}
