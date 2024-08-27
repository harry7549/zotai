"use client";
import React from "react";
import { useAtom } from "jotai";
import { todosAtom, todoInputAtom } from "./atom";

const App = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [todoInput, setTodoInput] = useAtom(todoInputAtom);

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoInput }]);
      setTodoInput("");
    }
    console.log("asd", todos);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter a new to-do"
      />
      <button onClick={addTodo}>Add To-Do</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
