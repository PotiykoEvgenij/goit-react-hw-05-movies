import React, { useEffect, useState } from 'react';
import { Link, useLocation, Outlet, useParams } from 'react-router-dom';
import MovieAPI from 'components/Api';
import { Genres } from 'components/Genres';
import styles from './MoviesDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);
  const [userScorePercentage, setUserScorePercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieAPI = new MovieAPI('a2eec4063d87f4e8e5e4230e87b07946');
        const details = await movieAPI.getMovieDetails(movieId);
        const genreNames = details.genres.map((genre) => genre.name);
        setMovieDetails(details);
        setGenres(genreNames);
        setUserScorePercentage(Math.round(details.vote_average * 10));
      } catch (error) {
        console.error(error);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.movieDetails}>
      <Link className={styles.linkBack} to={location.state?.from}>← Go back</Link>
      <div className={styles.movieWrapper}>
        <img className={styles.movieImg} src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`} alt={movieDetails.title} />
        <div className={styles.movieInfo}>
          <h1 className={styles.movieTitle}>{movieDetails.title} ({movieDetails.release_date.slice(0, 4)})</h1>
          <p className={styles.movietext}>User score: {userScorePercentage}%</p>
          <h2 className={styles.movieTitleInfo}>Overview</h2>
          <p className={styles.moviemovietext}>{movieDetails.overview}</p>
          <h2 className={styles.movieTitleInfo}>Genres</h2>
          <Genres genres={genres} />
        </div>
      </div>
      <h2 className={styles.movieAdditional}>Additional Information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
