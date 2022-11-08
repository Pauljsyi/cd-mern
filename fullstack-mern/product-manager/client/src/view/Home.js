import React from "react";
import DisplayAllProducts from "../components/DisplayAllProducts";
import Form from "../components/Form";

const Home = (props) => {
  const { id, setId } = props;
  return (
    <>
      <h1>Product Manager</h1>
      <Form />
      <DisplayAllProducts id={id} setId={setId} />
    </>
  );
};

export default Home;
