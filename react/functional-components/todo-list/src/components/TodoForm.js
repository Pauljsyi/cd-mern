import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

const initialState = {
  todo: "",
  completed: false,
};

const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const storedLocalStorage = JSON.parse(localStorage.getItem("lists"));
  const [values, setValues] = useState(initialState);
  // const [todos, setTodos] = useState([]);
  // const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTodos(storedLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);

  console.log("stored local storage", storedLocalStorage);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values.todo.length);

    if (values.todo.length === 0) {
      return;
    }

    setTodos((current) => [
      ...current,
      { todo: e.target.todo.value, completed: false },
    ]);
    setValues(initialState);
    // console.log(todos);
  };

  //TODO: make button submit input value - https://trello.com/c/VGuPFu5w/1-make-button-submit-input-value
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="add a todo item"
          name="todo"
          onChange={handleChange}
          value={values.todo}
        />
        <button type="submit">Add item</button>
      </form>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoForm;
