import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DisplaySingleProduct from "./view/DisplaySingleProduct";
import EditProductForm from "./components/EditProductForm";
import Home from "./view/Home";
import Navbar from "./components/Navbar";

function App() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  // console.log("app id", id);
  return (
    <div className="App">
      <Navbar
        setId={setId}
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        description={description}
        setDescription={setDescription}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              id={id}
              setId={setId}
              title={title}
              setTitle={setTitle}
              price={price}
              setPrice={setPrice}
              description={description}
              setDescription={setDescription}
              products={products}
              setProducts={setProducts}
            />
          }
        />
        <Route
          path="/products/:_id"
          element={<DisplaySingleProduct id={id} />}
        />
        <Route
          path="/products/:_id/edit"
          element={
            <EditProductForm
              id={id}
              setId={setId}
              title={title}
              setTitle={setTitle}
              price={price}
              setPrice={setPrice}
              description={description}
              setDescription={setDescription}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
