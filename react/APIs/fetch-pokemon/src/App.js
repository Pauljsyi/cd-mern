import "./App.css";
import react, { useState } from "react";
import Button from "./components/Button";
import PokemonList from "./components/PokemonList";
import MyContext from "./context/context";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [show, setShow] = useState(false);

  // console.log("appjs", pokemon);

  return (
    <div className="App">
      <MyContext.Provider value={{ pokemon, setPokemon, show, setShow }}>
        <Button />
        <PokemonList value={{ pokemon }} />
      </MyContext.Provider>
    </div>
  );
}

export default App;
