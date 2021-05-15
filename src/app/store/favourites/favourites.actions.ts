import { createAction, props } from '@ngrx/store';
import { Favourite } from 'src/app/favourites/shared/types/favourite';

export const getFavourites = createAction('[Favourites] Get Favourites');
export const getFavouritesSuccess = createAction(
  '[Favourites] Get Favourites Success',
  props<{
    payload: {
      favourites: Favourite[];
    };
  }>()
);

export interface AddMovieToFavouritesPayload {
  movie: Favourite;
}

export const addMovieToFavourites = createAction(
  '[Favourites] Add Movie To Favourites',
  props<{
    payload: AddMovieToFavouritesPayload;
  }>()
);
export const addMovieToFavouritesSuccess = createAction(
  '[Favourites] Add Movie To Favourites Success',
  props<{
    payload: AddMovieToFavouritesPayload;
  }>()
);

export interface RemoveMovieFromFavouritesPayload {
  movieId: number;
}

export const removeMovieFromFavourites = createAction(
  '[Favourites] Remove Movie From Favourites',
  props<{
    payload: RemoveMovieFromFavouritesPayload;
  }>()
);
export const removeMovieFromFavouritesSuccess = createAction(
  '[Favourites] Remove Movie From Favourites Success',
  props<{
    payload: RemoveMovieFromFavouritesPayload;
  }>()
);

export interface AddPersonalNoteToFavouritePayload {
  movieId: number;
  personalNote: string;
}

export const addPersonalNoteToFavourite = createAction(
  '[Favourites] Add Personal Note To Favourite',
  props<{
    payload: AddPersonalNoteToFavouritePayload;
  }>()
);

export const addPersonalNoteToFavouriteSuccess = createAction(
  '[Favourites] Add Personal Note To Favourite Success',
  props<{
    payload: AddPersonalNoteToFavouritePayload;
  }>()
);
