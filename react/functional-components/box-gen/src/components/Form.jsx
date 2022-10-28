import React, { useState } from "react";
import "../App.css";

const initialState = {
  color: "",
  height: "",
  width: "",
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  const [boxes, setBoxes] = useState([]);
  // console.log(boxes[0]);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.color.value);
    setBoxes((current) => [
      ...current,
      {
        color: e.target.color.value,
        height: e.target.height.value,
        width: e.target.width.value,
      },
    ]);
    setValues(initialState);
  };

  // console.log(values);
  console.log(boxes);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Color"
          name="color"
          onChange={handleChange}
          value={values.color}
        />
        <input
          type="number"
          placeholder="height"
          name="height"
          onChange={handleChange}
          value={values.height}
        />
        <input
          type="number"
          placeholder="width"
          name="width"
          onChange={handleChange}
          value={values.width}
        />
        <button className="Submit">Add</button>
      </form>
      <div className="box-container">
        {/* <p>{boxes}</p> */}
        {/* <p>{boxes + " "}</p> */}
        {boxes.map((item, i) => (
          <div
            className="box"
            key={i}
            style={{
              backgroundColor: `${item.color}`,
              height: `${item.height}px`,
              width: `${item.width}px`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Form;
