import React, { useContext } from "react";
import MyContext from "../context/context";

const Navbar = () => {
  const context = useContext(MyContext);
  const { name, setName } = context;
  return (
    <nav>
      <h3>Hi, {name}</h3>
    </nav>
  );
};

export default Navbar;
