import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieAPI from 'components/Api';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const movieAPI = new MovieAPI('a2eec4063d87f4e8e5e4230e87b07946');
        const cast = await movieAPI.getMovieCredits(movieId);
        setCast(cast.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Cast;