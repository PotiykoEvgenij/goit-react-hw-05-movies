import React, { useEffect, useState } from 'react';
import { Link, useLocation, Outlet, useParams } from 'react-router-dom';
import MovieAPI from 'components/Api';
import { Genres } from 'components/Genres';
// import { AdditionalInformation } from 'components/AdditionalInformation';

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
    <div>
      <Link to={location.state?.from}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`} alt={movieDetails.title} />
      <h1>{movieDetails.title} ({movieDetails.release_date.slice(0, 4)})</h1>
      <p>User score: {userScorePercentage}%</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h2>Genres</h2>
      <Genres genres={genres} />
      <h2>Additional Information</h2>
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
