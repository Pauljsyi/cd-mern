import React, { useState } from "react";

const initialState = {
  todo: "",
  completed: false,
};

const Todo = () => {
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
    setValues(initialState.todo);
    // console.log(todos);
  };

  // const checkboxHandler = (e, index) => {
  //   // console.log(e.target.name);
  //   let completed = e.target.checked;
  //   console.log("line 32", todos[index].todo);
  //   if (!completed) {
  //     setChecked(() => [{ todo: todos[index].todo, completed: false }]);
  //     todos[index].completed = checked;
  //     // console.log(index, e.target.checked, checked);
  //     console.log("line 37", checked);
  //     setChecked(false);
  //   } else {
  //     setChecked(true);
  //     // console.log(index, e.target.checked, checked);
  //     console.log("line 42", checked);
  //   }

  //   // todos[index].completed = false;
  //   // setTodos(e => )
  // };

  const toggleComplete = (index) =>
    setTodos(
      todos.map((todo, current) =>
        current === index ? { ...todo, complete: !todo.complete } : todo
      )
    );

  // const linethrough = (e) => {
  //   // console.log(checkboxHandler);
  //   console.log("linethrough is working");
  //   console.log(checkboxHandler);
  //   if (checkboxHandler === false) {
  //     return 'textDecorationLine: "line-through"';
  //   }
  //   return 'textDecorationLine: "line-through"';
  // };

  // console.log(todos[0]);

  const deleteHandler = (index) => {
    console.log(index);
    setTodos(
      todos.filter((todos, index) => {
        return todos[index] !== index;
      })
    );
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
{
  /* //TODO: render a list of todo's -
      https://trello.com/c/2H81GmGv/2-render-a-list-of-todos */
}
export default Todo;
