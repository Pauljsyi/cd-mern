import "./App.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import MyContext from "./context/context";

const initialValues = {
  title: "Star Wars",
  author: "George Lucas",
};

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={initialValues}>
        <Header />
        <Body />
      </MyContext.Provider>
    </div>
  );
}

export default App;
