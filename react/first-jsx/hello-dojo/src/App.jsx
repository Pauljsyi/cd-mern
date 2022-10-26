import { useState } from "react";
import Heading from "./components/Heading";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Heading />
      <Todo />
    </div>
  );
}

export default App;
