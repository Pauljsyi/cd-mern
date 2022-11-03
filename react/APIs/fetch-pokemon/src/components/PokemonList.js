import React, { useContext } from "react";
import MyContext from "../context/context";

const PokemonList = () => {
  const context = useContext(MyContext);
  const { pokemon, show } = context;
  //   console.log(show);
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {show ? (
            pokemon.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td key={i}>{item.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>#</td>
              <td>nothing to show</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonList;
