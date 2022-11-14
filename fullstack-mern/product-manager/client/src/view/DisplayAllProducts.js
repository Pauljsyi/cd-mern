import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

import axios from "axios";

const DisplayAllProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({});
  // const [added, setAdded] = useState({});
  const [deleteClicked, setDeleteClicked] = useState(false);
  // const [created, setCreated] = useState(false);
  // const { productId } = useParams();
  // console.log(products);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((req, res) => {
        setProducts(req.data.products);
      })
      .catch((err) => setError({ err: err }));
  }, [deleteClicked]);

  // const handleClick = (id) => {
  //   console.log("handleClick", id);
  //   // return <DisplaySingleProduct id={id} />;
  // };
  // console.log(id);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/delete/${id}`)
      .then((res) => {
        setDeleteClicked(!deleteClicked);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="table-container">
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
                  <Link className="product-name" to={`/products/${item._id}`}>
                    {item.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/products/${item._id}/edit`}>edit</Link>
                </td>
                <td>
                  <DeleteButton id={item._id} handleDelete={handleDelete} />
                </td>
              </tr>
            ))
          ) : (
            <p>nothing to show</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAllProducts;
