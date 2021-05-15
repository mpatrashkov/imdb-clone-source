import { Genre } from 'src/app/movies/shared/types/movieOverview';

export interface SearchResult {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  genres: Genre[];
}
