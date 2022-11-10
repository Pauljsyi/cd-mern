import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const initialState = {
  title: "",
  price: 0,
  description: "",
};

const EditProductForm = (props) => {
  const { _id } = useParams();

  const [formData, setFormData] = useState(initialState);
  const [product, setProduct] = useState("");
  const navigate = useNavigate();

  // console.log(_id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${_id}`)
      .then((req, res) => {
        setFormData({
          title: req.data.products.title,
          price: req.data.products.price,
          description: req.data.products.description,
        });
      })
      .catch((err) => console.log("error: ", err));
  }, [product]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/update/${_id}`, formData)
      .then((res) => {
        setProduct({
          title: formData.title,
          price: formData.price,
          description: formData.description,
        });
      })
      .catch((err) => console.log(err));
    setFormData(initialState);
    navigate("/");
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
        <button>Edit Product</button>
      </form>
    </div>
  );
};

export default EditProductForm;
