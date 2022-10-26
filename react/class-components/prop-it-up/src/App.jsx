import { useState } from "react";
import PersonCard from "./components/PersonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonCard
        last_name="Doe"
        first_name="Jane"
        age="45"
        hair_color="Black"
      />
      <PersonCard
        last_name="Smith"
        first_name="John"
        age="88"
        hair_color="Brown"
      />
      <PersonCard
        last_name="Fillmore"
        first_name="Millard"
        age="50"
        hair_color="Brown"
      />
      <PersonCard
        last_name="Smith"
        first_name="Maria"
        age="62"
        hair_color="Brown"
      />
    </div>
  );
}

export default App;
