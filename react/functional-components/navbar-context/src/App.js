import { useState } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import FormWrapper from "./components/FormWrapper";
import MyContext from "./context/context";
import "./App.css";

function App() {
  const [values, setValues] = useState("");
  const [name, setName] = useState({ name: "" });
  return (
    <div className="App">
      <MyContext.Provider value={{ values, setValues, name, setName }}>
        <Navbar />
        <FormWrapper />
      </MyContext.Provider>
    </div>
  );
}

export default App;
