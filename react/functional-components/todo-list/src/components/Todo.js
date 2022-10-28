import React from "react";

const Todo = () => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="add a todo item" name="todo" />
        <button></button>
      </form>
    </div>
  );
};

export default Todo;
