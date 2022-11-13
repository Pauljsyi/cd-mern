import "./App.css";

import { Routes, Route } from "react-router-dom";
import DisplaySingleProduct from "./view/DisplaySingleProduct";
import EditProductForm from "./components/EditProductForm";
import DisplayAllProducts from "./view/DisplayAllProducts";
import CreateProductForm from "./components/CreateProductForm";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayAllProducts />} />
        <Route path="/create" element={<CreateProductForm />} />
        <Route path="/products/:_id" element={<DisplaySingleProduct />} />
        <Route path="/products/:_id/edit" element={<EditProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
