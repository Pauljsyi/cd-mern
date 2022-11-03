<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import { useState } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import FormWrapper from "./components/FormWrapper";
import MyContext from "./context/context";
import "./App.css";

function App() {
  const [values, setValues] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="App">
      <MyContext.Provider value={{ values, setValues, name, setName }}>
        <Navbar />
        <FormWrapper />
      </MyContext.Provider>
>>>>>>> cda0630d0e772d5837963ffd04e1ebf588643e62
    </div>
  );
}

export default App;
