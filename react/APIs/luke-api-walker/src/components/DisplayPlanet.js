import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import Table from "react-bootstrap/Table";

const DisplayPlanet = () => {
  const { result, setResult, searchVal, setSearchVal } = useContext(MyContext);
  return (
    <>
      <h1>Planets</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Terrain</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{result.name}</td>
            <td>{result.rotation_period}</td>
            <td>{result.orbital_period}</td>
            <td>{result.diameter}</td>
            <td>{result.climate}</td>
            <td>{result.terrain}</td>
            <td>{result.population}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default DisplayPlanet;
