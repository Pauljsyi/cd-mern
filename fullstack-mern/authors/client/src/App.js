import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import DisplayAllAuthors from "./view/DisplayAllAuthors";
import DisplaySingleAuthor from "./view/DisplaySingleAuthor";
import CreateAuthor from "./components/CreateAuthor";
import EditAuthor from "./components/EditAuthor";
import Navbar from "./components/Navbar";

function App() {
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   axios.get("http://localhost:8000/hello").then((req, res) => {
  //     console.log("this is running");
  //     console.log("hello?:", req);
  //   });
  // };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayAllAuthors />} />
        <Route path="/create" element={<CreateAuthor />} />
        <Route path="/authors/edit/:id" element={<EditAuthor />} />
        <Route path="/authors/:id" element={<DisplaySingleAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
