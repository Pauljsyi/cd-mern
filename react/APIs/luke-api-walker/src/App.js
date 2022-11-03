import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import MyContext from "./context/MyContext";

function App() {
  const [people, setPeople] = useState({});
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      setPeople(response.data);
    });
    axios
      .get("https://swapi.dev/api/planets")
      .then((response) => setPlanets(response.data));
  }, []);

  console.log(people);
  console.log(planets);
  return (
    <div className="App">
      <MyContext.Provider value={{ people, planets }}>
        <Search />
      </MyContext.Provider>
    </div>
  );
}

export default App;
