import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplaySingleAuthor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        //   console.log(res.data.author);
      })
      .catch((err) => {
        console.log("frontend error: ", err);
      });
  }, []);
  return (
    <div>
      <div>
        <p>Author Name: </p>
        <p>
          {author.first_name} {author.last_name}
        </p>
      </div>
    </div>
  );
};

export default DisplaySingleAuthor;
