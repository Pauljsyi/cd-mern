import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProductForm = (props) => {
  const { id } = props;
  const { title, setTitle } = props;
  const { price, setPrice } = props;
  const { description, setDescription } = props;
  const [product, setProduct] = useState("");
  const navigate = useNavigate();
  // console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((req, res) => {
        setProduct(req.data.products);
        setTitle(req.data.products.title);
        setPrice(req.data.products.price);
        setDescription(req.data.products.description);
      })
      .catch((err) => console.log("error: ", err));
  }, [props.id, setProduct, setTitle, setPrice, setDescription]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/update/${props.id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        setProduct({
          title: title,
          price: price,
          description: description,
        });
      })
      .catch((err) => console.log(err));
    setTitle("");
    setPrice(0);
    setDescription("");
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label>title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button>Edit Product</button>
      </form>
    </div>
  );
};

export default EditProductForm;
