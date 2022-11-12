import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplaySingleProduct = (props) => {
  const { _id } = useParams();
  // console.log("DSP", props);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${_id}`).then((req, res) => {
      setProduct(req.data.products);
    });
  }, []);

  return (
    <div>
      <h3>{product.title}</h3>
      <p> ${product.price} </p>
      <p>{product.description}</p>
    </div>
  );
};

export default DisplaySingleProduct;
