import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DisplaySingleProduct from "./view/DisplaySingleProduct";
import Home from "./view/Home";

function App() {
  const [id, setId] = useState("");
  console.log("app id", id);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home id={id} setId={setId} />} />
        <Route
          path="/products/:_id"
          element={<DisplaySingleProduct id={id} />}
        />
      </Routes>
    </div>
  );
}

export default App;
