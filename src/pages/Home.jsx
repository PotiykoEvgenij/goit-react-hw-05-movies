import { useEffect, useState } from "react";
import MovieAPI from "components/Api";
import { MoviesList } from "components/MoviesList";
import styles from "./Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieAPI = new MovieAPI('a2eec4063d87f4e8e5e4230e87b07946');
        const trendingMovies = await movieAPI.getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <h1 className={styles.title}>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
