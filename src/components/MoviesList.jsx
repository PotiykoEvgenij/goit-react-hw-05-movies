import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (!movies) {
    return null;
  }

  return (
    <ul className={styles.moviesList}>
      {movies.map((movie) => (
        <li key={movie.id}  className={styles.movieCard}>
          <Link to={`/movies/${movie.id}`} state={{ movieId: movie.id, from: location }}>
            <img className={styles.moviesImg} src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
            <h2 className={styles.moviesTitle}>{movie.original_title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;