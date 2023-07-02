import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieAPI from 'components/Api';
import { useParams } from 'react-router-dom';


const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const movieAPI = new MovieAPI('a2eec4063d87f4e8e5e4230e87b07946');
        const reviews = await movieAPI.getMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);
  if (reviews.length === 0) {
    return <div>We don't have reviews for this movie.</div>;
  }
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Autor: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))} 
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Reviews;