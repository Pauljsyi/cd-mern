import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
