import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/movies/shared/types/movie';

export const nextPage = createAction('[Movies] Next Page');
export const nextPageSuccess = createAction(
  '[Movies] Next Page Success',
  props<{
    payload: {
      movies: Movie[];
      page: number;
    };
  }>()
);
