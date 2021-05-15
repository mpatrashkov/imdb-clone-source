import { Movie } from 'src/app/movies/shared/types/movie';

export interface Favourite extends Movie {
  personalNote: string;
}
