import React, { useState } from "react";

const Form = (props) => {
  const { formData, submitHandler, changeHandler } = props;
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label>title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={changeHandler}
          />
        </div>
        <div className="form-control">
          <label>price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={changeHandler}
          />
        </div>
        <div className="form-control">
          <label>description</label>
          <input
            type="text"
            name="description"
            onChange={changeHandler}
            value={formData.description}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
