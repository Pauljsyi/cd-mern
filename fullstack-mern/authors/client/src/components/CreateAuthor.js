import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

const initialValue = {
  first_name: "",
  last_name: "",
};

const CreateAuthor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors/new", formData)
      .then((req, res) => {
        setFormData(formData);
        navigate("/");
      })
      .catch((err) => {
        // console.log("terrible", err.response.data.validation_error.errors);
        const validateErr = err.response.data.validation_error.errors;
        return setError(validateErr);
      });
    setFormData(initialValue);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Create Author</h1>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        formData={formData}
        error={error}
      />
    </div>
  );
};

export default CreateAuthor;
