import React from "react";

const Form = (props) => {
  const { submitHandler, changeHandler, formData, error } = props;
  console.log(error);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label>first name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={changeHandler}
          />
        </div>
        {error.first_name ? (
          <span style={{ color: "red" }}>{error.first_name.message}</span>
        ) : null}
        <div className="form-control">
          <label>last name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={changeHandler}
          />
        </div>
        {error.last_name ? (
          <span style={{ color: "red" }}>{error.last_name.message}</span>
        ) : null}
        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
