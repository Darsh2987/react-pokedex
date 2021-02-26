import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [pokemon, setPokemon] = useState([]);

  // Fetch data from API
  useEffect(() => {
    async function fetchData(i) {
      const request = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
      setPokemon(request.data.results);
    }

    for (let i = 1; i < 151; i++) {
      fetchData(i);
    }
  }, []);

  console.log(pokemon);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
