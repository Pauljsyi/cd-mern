import React, { useState } from "react";

const initialState = {
  todo: "",
  completed: false,
};

const TodoList = () => {
  // const { todo, completed } = initialState;
  const [values, setValues] = useState(initialState);
  const [todos, setTodos] = useState([]);
  // const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);

    setTodos((current) => [
      ...current,
      { todo: e.target.todo.value, completed: false },
    ]);
    setValues("");
    // console.log(todos);
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, current) =>
        current === index ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteHandler = (delIdx) => {
    console.log("delIdx", delIdx);

    const filteredList = todos.filter((todos, index) => {
      console.log("index", index);
      return index !== delIdx;
    });
    setTodos(filteredList);
  };

  const deleteAll = () => setTodos([]);

  //TODO: make button submit input value - https://trello.com/c/VGuPFu5w/1-make-button-submit-input-value
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="add a todo item"
          name="todo"
          onChange={handleChange}
        />
        <button>Add item</button>
      </form>
      <div>{/* <p>{values.todo}</p> */}</div>
      {todos.map(({ todo, complete }, i) => (
        <div>
          {complete ? (
            <p style={{ textDecorationLine: "line-through" }}>{todo}</p>
          ) : (
            <p>{todo}</p>
          )}
          <input
            type="checkbox"
            key={i}
            name="completed"
            onClick={() => toggleComplete(i)}
          />
          <button type="submit" onClick={() => deleteHandler(i)}>
            Delete
          </button>
        </div>
      ))}
      <button onClick={() => deleteAll()}>clear all</button>
    </div>
  );
};

export default TodoList;
