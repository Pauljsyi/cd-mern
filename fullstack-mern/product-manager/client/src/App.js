import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DisplaySingleProduct from "./view/DisplaySingleProduct";
import EditProductForm from "./components/EditProductForm";
import DisplayAllProducts from "./view/DisplayAllProducts";
import CreateProductForm from "./components/CreateProductForm";
import axios from "axios";
import Form from "./components/Form";
// import Home from "./view/Home";
import Navbar from "./components/Navbar";
// import MyContext from "../context/MyContext";

const initialState = {
  title: "",
  price: 0,
  description: "",
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayAllProducts />} />
        <Route path="/create" element={<CreateProductForm />} />
        {/* <Route path="/create" element={<Form />} /> */}
        <Route path="/products/:_id" element={<DisplaySingleProduct />} />
        <Route path="/products/:_id/edit" element={<EditProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
