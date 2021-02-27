import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [pokemon, setPokemon] = useState([]);

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      for (let i = 1; i < 152; i++) {
        const request = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
        setPokemon((pokemon) => [...pokemon, request.data]);
      }
    }

    fetchData();
  }, []);

  // console.log(pokemon);

  // Fetch data from API
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=f5a07de26f8d5c4478107c654093e6e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
  //     setPokemon(request.data.results);
  //   }

  //   fetchData();
  // }, []);

  console.log(pokemon);

  return (
    <div className="App">
      {pokemon.map((item) => (
        <div>
          <h1>{item.id}</h1>
          <h1>{item.name}</h1>
          {/* <h1>{item.title}</h1> */}
          {/* <img src={"https://image.tmdb.org/t/p/w1280" + item.poster_path} alt={item.title} /> */}
        </div>
      ))}
    </div>
  );
}

export default App;
