import axios from 'axios';

export default class MovieAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.themoviedb.org/3';
  }

  async getTrendingMovies() {
    const url = `${this.baseURL}/trending/movie/day`;
    const config = {
      params: {
        api_key: this.apiKey,
        language: 'en-US',
      },
    };

    const response = await axios.get(url, config);
    return response.data.results;
  }

  async searchMovies(query) {
    const url = `${this.baseURL}/search/movie`;
    const config = {
      params: {
        api_key: this.apiKey,
        language: 'en-US',
        query: query,
      },
    };

    const response = await axios.get(url, config);
    return response.data.results;
  }

  async getMovieDetails(movieId) {
    const url = `${this.baseURL}/movie/${movieId}`;
    const config = {
      params: {
        api_key: this.apiKey,
        language: 'en-US',
      },
    };

    const response = await axios.get(url, config);
    return response.data;
  }

  async getMovieCredits(movieId) {
    const url = `${this.baseURL}/movie/${movieId}/credits`;
    const config = {
      params: {
        api_key: this.apiKey,
      },
    };

    const response = await axios.get(url, config);
    return response.data;
  }

  async getMovieReviews(movieId) {
    const url = `${this.baseURL}/movie/${movieId}/reviews`;
    const config = {
      params: {
        api_key: this.apiKey,
        language: 'en-US',
      },
    };

    const response = await axios.get(url, config);
    return response.data.results;
  }
}