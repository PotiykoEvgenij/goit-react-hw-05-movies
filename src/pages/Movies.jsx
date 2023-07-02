import React, { useState } from "react";
import { SearchBox } from "components/SearchBox";
import { MoviesList } from "../components/MoviesList";
import MovieAPI from "../components/Api";

const movieAPI = new MovieAPI('a2eec4063d87f4e8e5e4230e87b07946');

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const searchResults = await movieAPI.searchMovies(query);
    setMovies(searchResults);
  };
  return (
    <div>
      <SearchBox onSearch={searchMovies} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;