import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";

// 1. localhost:3000/home: This should display the home page, with a generic "Welcome" heading

// 2. localhost:3000/4: This should display the number "4", or any other number that was sent through

// 3. localhost:3000/hello: This should display the word "hello" or any other word that was sent through

// 4. localhost:3000/hello/blue/red: This should display the word "hello" in blue text with a red background. It should work with any other valid word and colors.

// Hint: use the isNaN method (is Not a Number). For example: isNaN(+"35") is false, isNaN(+"hello") is true

const Home = (props) => {
  return <h1>Welcome</h1>;
};

const NumberInput = () => {
  const { num } = useParams();
  console.log(num);
  let number = parseInt(num);
  // console.log(JSON.stringify(match));
  return <h1>{number}</h1>;
};

const StringInput = () => {
  const { string } = useParams();
  console.log(string);
  return <h1>{string}</h1>;
};

const StringColor = () => {
  const { string, color, bg } = useParams();
  console.log(string, color, bg);
  return (
    <h1 style={{ color: `${color}`, backgroundColor: `${bg}` }}>{string}</h1>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/num/:num" element={<NumberInput />} />
        <Route path="/:string" element={<StringInput />} />
        <Route path="/:string/:color/:bg" element={<StringColor />} />
      </Routes>
    </div>
  );
}

export default App;
