import React, { useState } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import CreateProductForm from "../components/CreateProductForm";
import MyContext from "../context/MyContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <h1>Product Manager</h1>
      {/* <MyContext.Provider value={"context pos"}> */}
      <CreateProductForm products={products} setProducts={setProducts} />
      {/* <DisplayAllProducts products={products} setProducts={setProducts} /> */}
      {/* </MyContext.Provider> */}
    </>
  );
};

export default Home;
