import React, { useEffect, useState } from "react";
import axios from "axios";

function RecipeApp() {
  const [message, setMessage] = useState("");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/testapi");
      console.log(response.data);
    };
    getData();
  }, []);

  const performSearch = () => {
    console.log("Searching for " + searchString);
  };

  return (
    <div className="container">
      <h1>Recipe App</h1>
      <input
        type="text"
        placeholder="Search for Recipes"
        onChange={(e) => setSearchString(e.target.value)}
      ></input>
      <button onClick={() => performSearch()}>Search</button>
      <h1>{searchString}</h1>
    </div>
  );
}

export default RecipeApp;
