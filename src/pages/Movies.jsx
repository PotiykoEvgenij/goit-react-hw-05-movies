import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "components/SearchBox";
import { MoviesList } from "../components/MoviesList";
import MovieAPI from "../components/Api";


const movieAPI = new MovieAPI('a2eec4063d87f4e8e5e4230e87b07946');

const Movies = () => {
  const navigate  = useNavigate();
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const searchResults = await movieAPI.searchMovies(query);
    setMovies(searchResults);

    navigate(`?query=${query}`);
  };

  return (
    <div>
      <SearchBox onSearch={searchMovies} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;