import axios from 'axios';

const API_KEY ='d088d1a85817dcb4d1c5dc39bb6a0114';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const searchFilms = 'search/movie';
const getTrendingFilms = 'trending/movie/day';

export function fetchTrandingFilm() {
  return axios.get(`${getTrendingFilms}`, {
    params: {
      api_key: API_KEY,
    },
  });
}

export function fetchSearchFilms(query) {
  return axios.get(`${searchFilms}`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
}

export function fetchByMovieId(id) {
  return axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
}

export function fetchCastOfMovie(id){
  return axios.get(`movie/${id}/credits` , {
    params: {
      api_key: API_KEY,
    },
  });
}

export function fetchReviewsOfMovie(id){
  return axios.get(`movie/${id}/reviews`,  {
    params: {
      api_key: API_KEY,
    },
  })
}