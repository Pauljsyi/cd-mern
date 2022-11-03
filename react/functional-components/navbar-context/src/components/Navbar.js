import React, { useContext } from "react";
import MyContext from "../context/context";

const Navbar = () => {
  const context = useContext(MyContext);
  const { name, setName } = context;
  console.log(typeof name);
  return <nav> {name ? <h3>Hi, {name}</h3> : <h3>Hi, User</h3>}</nav>;
};

export default Navbar;
