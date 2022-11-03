import React, { useEffect, useContext } from "react";
import MyContext from "../context/context";
import axios from "axios";

const Button = () => {
  const context = useContext(MyContext);
  const { pokemon, setPokemon } = context;
  const { show, setShow } = context;

  //   useEffect(() => {
  //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((response) => {
  //         // console.log(response);
  //         setPokemon(response.results);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemon(response.data.results);
        // console.log(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //   console.log(pokemon[0]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  //   console.log("show", setShow);

  return (
    <div>
      <button onClick={submitHandler}>Fetch Pokemon</button>
    </div>
  );
};

export default Button;
