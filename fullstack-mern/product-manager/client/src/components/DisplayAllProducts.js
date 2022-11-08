import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayAllProducts = (props) => {
  const { id, setId } = props;
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

  const handleClick = (e) => {
    console.log(e.target.id);
    setId(e.target.id);
  };
  return (
    <>
      {products ? (
        products.map((item, index) => (
          <div className="product-container">
            <h5>
              <Link
                to={`/products/${item._id}`}
                id={item._id}
                onClick={handleClick}
              >
                {item.title}
              </Link>
            </h5>
          </div>
        ))
      ) : (
        <p>nothing to show</p>
      )}
    </>
  );
};

export default DisplayAllProducts;
