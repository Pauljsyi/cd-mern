import React from "react";

const TodoList = (props) => {
  console.log("props", props);
  //   const toggleComplete = (index) =>
  //     setTodos(
  //       todos.map((todo, current) =>
  //         current === index ? { ...todo, complete: !todo.complete } : todo
  //       )
  //     );

  //   const deleteHandler = (index) => {
  //     console.log(index);
  //     setTodos(
  //       todos.filter((todos, index) => {
  //         return todos[index] !== index;
  //       })
  //     );
  //   };
  return (
    <div>
      todoList
      {/* {todos.map(({ todo, complete }, i) => (
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
      <button onClick={() => deleteAll()}>clear all</button> */}
    </div>
  );
};

export default TodoList;
