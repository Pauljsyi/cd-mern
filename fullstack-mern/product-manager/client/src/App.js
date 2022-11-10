import "./App.css";
import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import DisplaySingleProduct from "./view/DisplaySingleProduct";
import EditProductForm from "./components/EditProductForm";
import Home from "./view/Home";
import Navbar from "./components/Navbar";
// import MyContext from "../context/MyContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:_id" element={<DisplaySingleProduct />} />
        <Route path="/products/:_id/edit" element={<EditProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
