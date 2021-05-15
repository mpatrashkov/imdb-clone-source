import { createReducer, on } from '@ngrx/store';
import { initialState } from './favourites.state';
import {
  getFavouritesSuccess,
  addMovieToFavouritesSuccess,
  removeMovieFromFavouritesSuccess,
  addPersonalNoteToFavouriteSuccess,
} from './favourites.actions';

const _favouritesReducer = createReducer(
  initialState,
  on(getFavouritesSuccess, (state, { payload }) => ({
    ...state,
    favourites: payload.favourites,
  })),
  on(addMovieToFavouritesSuccess, (state, { payload }) => ({
    ...state,
    favourites: {
      ...state.favourites,
      [payload.movie.id]: payload.movie,
    },
  })),
  on(removeMovieFromFavouritesSuccess, (state, { payload }) => {
    const favourites = { ...state.favourites };
    delete favourites[payload.movieId];

    return {
      ...state,
      favourites: {
        ...favourites,
      },
    };
  }),
  on(addPersonalNoteToFavouriteSuccess, (state, { payload }) => {
    const favourites = { ...state.favourites };
    const favourite = favourites[payload.movieId];

    return {
      ...state,
      favourites: {
        ...favourites,
        [payload.movieId]: {
          ...favourite,
          personalNote: payload.personalNote,
        },
      },
    };
  })
);

export function favouritesReducer(state, action) {
  return _favouritesReducer(state, action);
}
