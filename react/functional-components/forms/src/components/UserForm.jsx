import React, { useState, useReducer } from "react";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function reducer(state, action) {
  return {
    ...state,
    [action.type]: action.payload,
  };
}

const UserForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [form, setForm] = useState("");
  const [formError, setFormError] = useState("");
  const [fNameError, setfNameError] = useState("");
  const [lNameError, setlNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { fName, lName, email, password, confirmPassword };
    console.log(`Welcome ${newUser.fName}`, newUser);
    setFName("");
    setLName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: name,
      payload: value,
    });
  }

  const handleFName = (e) => {
    setFName(e.target.value);
    if (e.target.value.length < 1) {
      setfNameError("first name is required");
    } else if (e.target.value.length < 2) {
      setfNameError("first name must be at least 2 characters");
    } else {
      setfNameError("");
    }
  };

  const handleLName = (e) => {
    setLName(e.target.value);
    if (e.target.value.length < 1) {
      setlNameError("last name is required");
    } else if (e.target.value.length < 2) {
      setlNameError("last name must be at least 2 characters");
    } else {
      setlNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("email is required");
    } else if (e.target.value.length < 5) {
      setEmailError("email must be at least 5 characters");
    } else {
      setEmailError("");
    }
  };

  const handlePWLength = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("password is required");
    } else if (e.target.value.length < 8) {
      setPasswordError("password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handlePassword = (e) => {
    // setPassword(e.target.value);
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 1) {
      setConfirmPasswordError("password is required");
    } else if (e.target.value.length < 8) {
      setConfirmPasswordError("password must be at least 8 characters");
    } else if (password != e.target.value) {
      setConfirmPasswordError("passwords don't match");
    } else if (password === e.target.value) {
      setConfirmPasswordError("");
    }
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            name="fName"
            onChange={handleFName}
            value={fName}
          />
          {fNameError ? <p style={{ color: "red" }}>{fNameError}</p> : ""}
        </div>
        <div>
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            name="lName"
            onChange={handleLName}
            value={lName}
          />
          {lNameError ? <p style={{ color: "red" }}>{lNameError}</p> : ""}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleEmail}
            value={email}
          />
          {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handlePWLength}
            value={password}
          />
          {passwordError ? <p style={{ color: "red" }}>{passwordError}</p> : ""}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handlePassword}
            value={confirmPassword}
          />
          {confirmPasswordError ? (
            <p style={{ color: "red" }}>{confirmPasswordError}</p>
          ) : (
            ""
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>First Name: {fName}</p>
        <p>Last Name: {lName}</p>
        <p>Email: {email} </p>
        <p>password: {password} </p>
        <p>confirm password: {confirmPassword} </p>
      </div>
    </>
  );
};

export default UserForm;
