import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Search from "./components/Search";
import DisplayPeople from "./components/DisplayPeople";
import DisplayPlanet from "./components/DisplayPlanet";
import MyContext from "./context/MyContext";
import Error from "./components/Error";

function App() {
  const [result, setResult] = useState({});
  const [searchVal, setSearchVal] = useState({});
  const [axiosError, setAxiosError] = useState("");

  const Display = () => {
    if (axiosError) {
      return <Error />;
    }
    if (searchVal.data === "people") {
      return <DisplayPeople />;
    } else if (searchVal.data === "planets") {
      return <DisplayPlanet />;
    }
  };

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          result,
          setResult,
          searchVal,
          setSearchVal,
          axiosError,
          setAxiosError,
        }}
      >
        <Search />
        {/* <Display /> */}

        <Routes>
          <Route path="/people/:id" element={<DisplayPeople />} />
          <Route path="/planets/:id" element={<DisplayPlanet />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
