import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MyContext from "../context/MyContext";
import axios from "axios";
import Table from "react-bootstrap/Table";

const DisplayPeople = () => {
  const context = useContext(MyContext);
  const { people, id } = useParams();
  const {
    result,
    setResult,
    searchVal,
    setSearchVald,
    axiosError,
    setAxiosError,
  } = context;
  const [homeworld, setHomeworld] = useState("");
  const [loading, setLoading] = useState(true);

  const hw = result.homeworld;
  console.log("hw", hw);
  console.log("result", result);
  useEffect(() => {
    // fetchHomeWorld();
    console.log("hw useeffect", hw);
    if (result && result.homeworld) {
      axios
        .get(result.homeworld)
        .then((res) => {
          setHomeworld(res.data.name);
          console.log("first");
          setLoading(false);
        })
        .catch((e) => {
          console.log("something went wrong fetching homeworld");
          setAxiosError(e);
          return Promise.reject(e);
        });
    }
  }, [result]);
  // async function fetchHomeWorld() {
  //   setHomeworld("");
  //   let response = await axios(hw).then((res) => {
  //     console.log(res.data);
  //     setHomeworld(res.data.name);
  //   });
  // }

  console.log("homeworld: ", homeworld);

  return (
    <>
      {!loading ? (
        <>
          <h1>People</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Hair Color</th>
                <th>Skin Color</th>
                <th>Home World</th>
                <th>Link to Home World</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.name}</td>
                <td>{result.height}</td>
                <td>{result.mass}</td>
                <td>{result.hair_color}</td>
                <td>{result.skin_color}</td>
                <td>{homeworld}</td>
                <td>
                  <Link to={`/planets/${id}`}>homeworld</Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      ) : null}
    </>
  );
};

export default DisplayPeople;
