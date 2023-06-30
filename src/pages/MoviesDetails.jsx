import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MovieAPI from 'components/Api';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

const MovieDetails = () => {
  const location = useLocation();
  const movieId = location.state?.movieId;
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieAPI = new MovieAPI('a2eec4063d87f4e8e5e4230e87b07946');
        const details = await movieAPI.getMovieDetails(movieId);
        const genreNames = details.genres.map((genre) => genre.name);
        const reviews = await movieAPI.getMovieReviews(movieId);
        setMovieDetails(details);
        setGenres(genreNames);
        setReviews(reviews);
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

  const renderGenres = () => {
    return genres.map((genre, index) => (
      <span key={index} className="genre">
        {genre}
      </span>
    ));
  };

  const renderAdditionalInformation = () => {
    return (
      <div>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to={{ pathname: `/movies/${movieId}/cast`, state: { movieId } }}>Cast</Link>
          </li>
          {reviews.length > 0 ? (
            <li>
              <Link to={{ pathname: `/movies/${movieId}/reviews`, state: { movieId } }}>Reviews</Link>
            </li>
          ) : (
            <li>We don't have reviews for this movie.</li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Link to={location.state?.from}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`} alt={movieDetails.title} />
      <h1>{movieDetails.title} ({movieDetails.release_date.slice(0, 4)})</h1>
      <p>User score: {movieDetails.vote_average}</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h2>Genres</h2>
      <div className="genres">{renderGenres()}</div>
      {renderAdditionalInformation()}
      {location.pathname === `/movies/${movieId}/cast` && <Cast movieId={movieId} />}
      {location.pathname === `/movies/${movieId}/reviews` && <Reviews movieId={movieId} />}
    </div>
  );
};

export default MovieDetails;
