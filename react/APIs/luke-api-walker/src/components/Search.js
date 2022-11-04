import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";
import axios from "axios";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const {
    homeworld,
    setHomeworld,
    result,
    setResult,
    searchVal,
    setSearchVal,
    axiosError,
    setAxiosError,
  } = useContext(MyContext);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${data}/${id}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((e) => {
        console.log("had some trouble fetching data", e);
        setAxiosError(e);
        return Promise.reject(e);
      });
  }, [data, id]);

  const submitHandler = (e) => {
    e.preventDefault();
    let data = e.target.search.value;
    setData(data);
    let id = e.target.id.value;
    setId(id);

    setSearchVal({
      data: data,
      id: id,
    });
    console.log("submit axios error", axiosError);
    if (axiosError) {
      navigate("/error");
      setAxiosError("");
    } else if (data === "people") {
      navigate(`/people/${id}`);
    } else if (data === "planets") {
      navigate(`/planets/${id}`);
    }
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-container">
          <p>Search for:</p>
          <select name="search" id="search">
            <option value="people">people</option>
            <option value="planets">planets</option>
            {/* <option value="vehicles">vehicles</option>
            <option value="starship">starship</option>
            <option value="species">species</option> */}
          </select>
        </div>
        <div className="form-container">
          <p>ID:</p>
          <input
            type="number"
            name="id"
            onChange={changeHandler}
            value={value}
          />
        </div>
        <button>Search</button>
      </form>
    </>
  );
};

export default Search;
