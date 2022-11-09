import React from "react";
import DisplayAllProducts from "../components/DisplayAllProducts";
import CreateProductForm from "../components/CreateProductForm";

const Home = (props) => {
  const { id, setId } = props;
  const { products, setProducts } = props;
  return (
    <>
      <h1>Product Manager</h1>
      <CreateProductForm props={props} />
      <DisplayAllProducts
        id={id}
        setId={setId}
        products={products}
        setProducts={setProducts}
      />
    </>
  );
};

export default Home;
