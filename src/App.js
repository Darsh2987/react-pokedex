import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  // API KEY
  const apiKey = "f5a07de26f8d5c4478107c654093e6e1";

  // Base URL of API requests
  const baseURL = "https://api.themoviedb.org/3";

  // Object containing all API URL endpoints
  const apiRequests = {
    trending: `${baseURL}/trending/all/week?api_key=${apiKey}&language=en-US`,
    popularMovies: `${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    upcomingMovies: `${baseURL}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    popularTV: `${baseURL}/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
    actionMovies: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=28`,
    comedyMovies: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=35`,
    horrorMovies: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=27`,
    romanceMovies: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=10749`,
    documentaries: `${baseURL}/discover/movie?api_key=${apiKey}&with_genres=99`,
  };

  const [movie, setMovie] = useState([]);
  const [usersChoice, setUsersChoice] = useState(apiRequests.popularMovies); // Load site with popular movies data

  // Functions - Category Buttons
  function Trending() {
    setUsersChoice(apiRequests.trending);
  }

  function PopularMovies() {
    setUsersChoice(apiRequests.popularMovies);
  }

  function PopularTV() {
    setUsersChoice(apiRequests.popularTV);
  }

  function UpcomingMovies() {
    setUsersChoice(apiRequests.upcomingMovies);
  }

  function ActionMovies() {
    setUsersChoice(apiRequests.actionMovies);
  }

  function ComedyMovies() {
    setUsersChoice(apiRequests.comedyMovies);
  }

  function HorrorMovies() {
    setUsersChoice(apiRequests.horrorMovies);
  }

  function RomanceMovies() {
    setUsersChoice(apiRequests.romanceMovies);
  }

  function Documentaries() {
    setUsersChoice(apiRequests.documentaries);
  }

  // One Function for all category buttons -
  function Category(e) {
    const target = e.target.getAttribute("category");
    const request = `apiRequests.${target}`;
    setUsersChoice({ request });
    console.log(request);
    console.log(usersChoice);
  }

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      const request = await axios(usersChoice);
      setMovie(request.data.results);
    }

    fetchData();
  }, [movie]);

  return (
    <div className="App">
      <button onClick={Category} category="trending">
        Trending
      </button>
      <button onClick={PopularMovies}>Popular Movies</button>
      <button onClick={UpcomingMovies}>Upcoming Movies</button>
      <button onClick={PopularTV}>Popular TV</button>
      <button onClick={ActionMovies}>Action Movies</button>
      <button onClick={ComedyMovies}>Comedy Movies</button>
      <button onClick={HorrorMovies}>Horror Movies</button>
      <button onClick={RomanceMovies}>Romance Movies</button>
      <button onClick={Documentaries}>Documentaries</button>

      {movie.map((item) => (
        <div>
          <h1>{item.title || item.name}</h1>
          <p>{item.overview}</p>
          <img src={"https://image.tmdb.org/t/p/w1280" + item.poster_path} style={{ width: "200px" }} alt={item.title} />
        </div>
      ))}
    </div>
  );
}

export default App;
