import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = (props) => {
  //   console.log("navbar", props);
  const clickHandler = () => {
    props.setTitle("");
    props.setPrice(0);
    props.setDescription("");
    Navigate("/");
  };
  return (
    <div>
      <button>
        <Link to="/" onClick={clickHandler}>
          Home
        </Link>
      </button>
      <button>
        <Link to="/create">Add a Product</Link>
      </button>
    </div>
  );
};

export default Navbar;
