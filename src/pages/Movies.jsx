import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MoviesList } from "components/MoviesList";
import { SearchBox } from "components/SearchBox";
import MovieAPI from 'components/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieAPI = new MovieAPI('a2eec4063d87f4e8e5e4230e87b07946');
          const searchResults = await movieAPI.searchMovies(searchQuery);
          console.log(searchResults.results);
          setMovies(searchResults.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchQuery) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchParams({ query });
  };

    console.log(movies);
  return (
    <main>
      <SearchBox value={searchQuery} onChange={handleSearch} onSubmit={handleSearch} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;