import axios from 'axios';

const KEY = '33b1970aafc3d74cd7bfcca057d00843';

export const getTrendingMovies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
  const { data } = await axios.get(`${BASE_URL}?api_key=${KEY}`);
  return data;
};

export const getSearchMovies = async query => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const { data } = await axios.get(
    `${BASE_URL}?api_key=${KEY}&query=${query}&page=1`
  );
  return data;
};

export const getDetailsMovie = async id => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const { data } = await axios.get(`${BASE_URL}/${id}?api_key=${KEY}`);
  return data;
};

export const getCreditsMovie = async id => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const { data } = await axios.get(`${BASE_URL}/${id}/credits?api_key=${KEY}`);
  return data;
};

export const getReviewsMovies = async id => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const { data } = await axios.get(
    `${BASE_URL}/${id}/reviews?api_key=${KEY}&page=1`
  );
  return data;
};
