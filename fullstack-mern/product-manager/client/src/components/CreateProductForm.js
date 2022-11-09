import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const CreateProductForm = (props) => {
  const { title, setTitle } = props.props;
  const { price, setPrice } = props.props;
  const { description, setDescription } = props.props;
  const { products, setProducts } = props.props;

  useEffect(() => {
    setTitle("");
    setPrice(0);
    setDescription("");
  }, [setTitle, setPrice, setDescription]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products/new", {
        title,
        price,
        description,
      })
      .then((res) => {
        setProducts([
          ...products,
          {
            title: title,
            price: price,
            description: description,
          },
        ]);
      })
      .catch((err) => console.log(err));
    setTitle("");
    setPrice(0);
    setDescription("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>Price</label>
          <input
            type="Number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default CreateProductForm;
