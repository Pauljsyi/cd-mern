import React from "react";

const TodoList = (props) => {
  //   const { todos, setTodos } = props;
  console.log("props in todolist", props);
  const toggleComplete = (index) => {
    props.setTodos(
      props.todos.map((todo, current) =>
        current === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteHandler = (delIdx) => {
    console.log("delIdx", delIdx);

    const filteredList = props.todos.filter((todos, index) => {
      console.log("index", index);
      return index !== delIdx;
    });
    props.setTodos(filteredList);
  };

  const deleteAll = () => props.setTodos([]);
  return (
    <div>
      <h1>Things to do:</h1>
      {props.todos.map(({ todo, completed }, i) => (
        <div>
          {completed ? (
            <>
              <p style={{ textDecorationLine: "line-through" }}>{todo}</p>
              <input
                type="checkbox"
                key={i}
                name="completed"
                onClick={() => toggleComplete(i)}
                checked
              />
            </>
          ) : (
            <>
              <p>{todo}</p>
              <input
                type="checkbox"
                key={i}
                name="completed"
                onClick={() => toggleComplete(i)}
              />
            </>
          )}

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
