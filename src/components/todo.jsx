import React, { useState } from "react";
import "./todo.css";
const todo = () => {
  const [todo, setTodo] = useState([]);
  const [val, setVal] = useState("");

  const addTodo = () => {
    if (val.trim()) {
      if (todo.includes(val)) {
        window.confirm(`${val} is already in side your list.`);
      } else {
        setTodo((t) => [...t, val]);
      }
      setVal("");
    }
  };
  const deleteTodo = (index) => {
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);
  };

  return (
    <div className="App">
      <h1>A simple to-do list</h1>
      <input
        type="text"
        value={val}
        placeholder="enter a new Task"
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default todo;
