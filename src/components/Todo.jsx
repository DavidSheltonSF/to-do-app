import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const doneTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer doneTodos={doneTodos} totalTodos={totalTodos} />
    </>
  );
}
