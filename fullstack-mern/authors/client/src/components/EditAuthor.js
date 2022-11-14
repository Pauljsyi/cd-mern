import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

const initialState = {
  title: "",
  price: 0,
  description: "",
};

const EditAuthor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((req, res) => {
        //   console.log(req.data.author);
        setFormData({
          first_name: req.data.author.first_name,
          last_name: req.data.author.last_name,
        });
      })
      .catch((err) => {
        console.log("error in edit: ", err);
      });
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/update/${id}`, formData)
      .then((req, res) => {
        setFormData(formData);
        navigate("/");
        // console.log(req);
      })
      .catch((err) => {
        const validateError = err.response.data.validation_error.errors;
        setError(validateError);
        console.log(validateError);
      });
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  return (
    <div>
      <h1>Edit Author</h1>
      <Form
        formData={formData}
        error={error}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
    </div>
  );
};

export default EditAuthor;
