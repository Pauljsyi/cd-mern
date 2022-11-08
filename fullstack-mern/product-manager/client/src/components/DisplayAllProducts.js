import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const DisplayAllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((req, res) => {
        setProducts(req.data.products);
        console.log("request: ", req.data.products);
      })
      .catch((err) => console.log("error: ", err));
  }, []);
  console.log(products);
  return (
    <>
      {products.map((item, index) => (
        <div className="product-container">
          <h5>{item.title}</h5>
          <p>${item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAllProducts;
