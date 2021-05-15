import { Movie } from 'src/app/movies/shared/types/movie';

export interface MoviesState {
  popularMovies: Movie[];
  currentPage: number;
}

export const initialState: MoviesState = {
  popularMovies: [],
  currentPage: 1,
};
