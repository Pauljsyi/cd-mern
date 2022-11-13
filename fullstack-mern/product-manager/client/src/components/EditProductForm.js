import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

const initialState = {
  title: "",
  price: 0,
  description: "",
};

const EditProductForm = () => {
  const { _id } = useParams();
  const [error, setError] = useState({});

  const [formData, setFormData] = useState(initialState);
  const [product, setProduct] = useState("");
  const navigate = useNavigate();

  // console.log(_id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${_id}`)
      .then((req, res) => {
        // console.log("get one working");
        setFormData({
          title: req.data.products.title,
          price: req.data.products.price,
          description: req.data.products.description,
        });
      })
      .catch((err) => console.log("error: ", err));
  }, [product, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/update/${_id}`, formData)
      .then((req, res) => {
        console.log("put working");
        setFormData(formData);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
        const validateError = err.response.data.validation_error.errors;
        return setError(validateError);
      });
    setFormData(initialState);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        formData={formData}
        error={error}
      />
      {/* <form onSubmit={submitHandler}>
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
        <button>Edit Product</button>
      </form> */}
    </div>
  );
};

export default EditProductForm;
