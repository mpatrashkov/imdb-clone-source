import { createReducer, on } from '@ngrx/store';
import { nextPageSuccess } from './movies.actions';
import { initialState } from './movies.state';

const _moviesReducer = createReducer(
  initialState,
  on(nextPageSuccess, (state, { payload }) => ({
    ...state,
    popularMovies: payload.movies,
    currentPage: payload.page,
  }))
);

export function moviesReducer(state, action) {
  return _moviesReducer(state, action);
}
