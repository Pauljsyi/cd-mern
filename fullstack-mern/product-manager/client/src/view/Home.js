import React from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import CreateProductForm from "../components/CreateProductForm";
import MyContext from "../context/MyContext";

const Home = () => {
  return (
    <>
      <h1>Product Manager</h1>
      <MyContext.Provider value={"context pos"}>
        <CreateProductForm />
        <DisplayAllProducts />
      </MyContext.Provider>
    </>
  );
};

export default Home;
