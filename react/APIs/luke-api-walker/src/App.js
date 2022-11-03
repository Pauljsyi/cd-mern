import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [people, setPeople] = useState({});
  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      setPeople(response.data);
    });
  }, []);
  console.log(people);
  return <div className="App"> </div>;
}

export default App;
