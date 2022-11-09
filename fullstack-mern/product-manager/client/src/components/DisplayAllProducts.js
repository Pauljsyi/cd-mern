import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DisplayAllProducts = (props) => {
  const navigate = useNavigate();
  const { id, setId } = props;
  const { products, setProducts } = props;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((req, res) => {
        setProducts(req.data.products);
      })
      .catch((err) => console.log("error: ", err));
  }, [setProducts]);

  const handleClick = (e) => {
    console.log(e.target.id);
    setId(e.target.id);
  };

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:8000/api/products/delete/${e.target.id}`)
      .then((req, res) => {
        console.log(req.data);
        setProducts([...products]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((item, index) => (
              <tr>
                <td>
                  <Link
                    className="product-name"
                    to={`/products/${item._id}`}
                    id={item._id}
                    onClick={handleClick}
                  >
                    {item.title}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/products/${item._id}/edit`}
                    id={item._id}
                    onClick={handleClick}
                  >
                    edit
                  </Link>
                </td>
                <td>
                  <Link id={item._id} onClick={handleDelete}>
                    delete
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <p>nothing to show</p>
          )}
        </tbody>
      </table>
    </>
  );
};

export default DisplayAllProducts;
