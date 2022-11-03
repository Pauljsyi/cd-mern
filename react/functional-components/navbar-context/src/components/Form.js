import React, { useState, useEffect, useContext } from "react";
import MyContext from "../context/context";

const Form = (props) => {
  const context = useContext(MyContext);
  const { values, setValues } = context;
  const { name, setName } = context;

  console.log("context", context);
  // console.log(name);

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log("submithandler", e.target.name.value);

    setName(e.target.name.value);
    setValues("");
  };

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setValues(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={changeHandler}
          name="name"
          value={values}
        />
        <button>add name</button>
      </form>
    </>
  );
};

export default Form;
