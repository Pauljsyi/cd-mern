import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
