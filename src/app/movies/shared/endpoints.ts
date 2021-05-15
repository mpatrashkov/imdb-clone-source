import { apiUrl } from 'src/app/config';

export const moviePopular = apiUrl + '/movie/popular';
export const movieDetails = (movieId: number) => apiUrl + `/movie/${movieId}`;
export const movieCast = (movieId: number) =>
  apiUrl + `/movie/${movieId}/credits`;
export const movieReviews = (movieId: number) =>
  apiUrl + `/movie/${movieId}/reviews`;
export const movieRecommnedations = (movieId: number) =>
  apiUrl + `/movie/${movieId}/recommendations`;
