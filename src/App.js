import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=aee29290"; //uses OMDb API key

const movie1 = {
  Title: "Spiderman",
  Year: "1990",
  imdbID: "tt0100669",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]); //empty array
  const [searchTerm, setSearchTerm] = useState(""); //empty string

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //this will call the API
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Simple Movie App</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">No movies found</div>
      )}
    </div>
  );
};

export default App;

/*

{movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"}
//if poster is not equal to N/A then we can render movie1.poster, but if there is no image then we can render placeholder image

*/

/*

import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=aee29290"; //uses OMDb API key

const movie1 = {
  Title: "Spiderman",
  Year: "1990",
  imdbID: "tt0100669",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //this will call the API
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Simple Movie App</h1>
      <div className="search">
        <input placeholder="Search for movies" value={""} onChange={() => {}} />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">No movies found</div>
      )}
    </div>
  );
};

export default App;

*/
