import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplaySingleProduct = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props.id}`)
      .then((req, res) => {
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
