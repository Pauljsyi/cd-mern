import React, { useState } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const initialValue = {
  title: "",
  price: 0,
  description: "",
};

const CreateProductForm = () => {
  const [formData, setFormData] = useState(initialValue);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products/new", formData)
      .then((res) => {
        console.log("product created");
        setFormData(formData);
        navigate("/");
      })
      .catch((err) => console.log(err));
    setFormData(initialValue);
  };

  return (
    <>
      <h2>Add a Product</h2>
      <Form
        formData={formData}
        setFormData={setFormData}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
      {/* <form onSubmit={submitHandler}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={changeHandler}
            value={formData.title}
          />
        </div>
        <div className="form-control">
          <label>Price</label>
          <input
            type="Number"
            name="price"
            placeholder="Price"
            onChange={changeHandler}
            value={formData.price}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={changeHandler}
            value={formData.description}
          />
        </div>
        <button>Submit</button>
      </form> */}
    </>
  );
};

export default CreateProductForm;
