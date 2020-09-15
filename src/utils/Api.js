import Axios from 'axios';

const API_KEY = '89b9004c084fb7d0e8ffaadd17cb8254';

const getPopularMovies = () =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  ).then(res => res.data.results);

const getMovieById = id =>
  Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(
    res => res.data,
  );

const getMovie = query =>
  Axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US`,
  ).then(res => res.data.results);

const getMovieCast = id =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  ).then(res => res.data.cast);

const getMovieReviews = id =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(res => res.data.results);

export default {
  getPopularMovies,
  getMovie,
  getMovieById,
  getMovieCast,
  getMovieReviews,
};
