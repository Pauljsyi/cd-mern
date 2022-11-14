import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";

const DisplayAllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState({});
  const [deleteClicked, setDeleteClicked] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((req, res) => {
        console.log(req.data.author);
        setAuthors(req.data.author);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleteClicked]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/delete/${id}`)
      .then((res) => {
        setDeleteClicked(!deleteClicked);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(authors);
  return (
    <div>
      <p>We have quotes by:</p>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {authors ? (
            authors.map((item, index) => (
              <tr>
                <td>
                  <Link className="link" to={`/authors/${item._id}`}>
                    {item.first_name} {item.last_name}
                  </Link>
                </td>
                <td className="td-actions">
                  <button>
                    <Link className="link" to={`/authors/edit/${item._id}`}>
                      edit
                    </Link>
                  </button>
                  <DeleteButton handleDelete={handleDelete} id={item._id} />
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

export default DisplayAllAuthors;
