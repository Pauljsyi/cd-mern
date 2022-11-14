import React from "react";

const Form = (props) => {
  const { formData, submitHandler, changeHandler, error } = props;
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
          {error.title ? (
            <span style={{ color: "red" }}>{error.title.message}</span>
          ) : (
            <span></span>
          )}
        </div>
        <div className="form-control">
          <label>price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={changeHandler}
          />
          {error.price ? (
            <span style={{ color: "red" }}>{error.price.message}</span>
          ) : null}
        </div>
        <div className="form-control">
          <label>description</label>
          <input
            type="text"
            name="description"
            onChange={changeHandler}
            value={formData.description}
          />
          {error.description ? (
            <span style={{ color: "red" }}>{error.description.message}</span>
          ) : null}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
