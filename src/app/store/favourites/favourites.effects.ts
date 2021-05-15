import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { mergeMap, map, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { Store, select, ActionCreator } from '@ngrx/store';
import { of } from 'rxjs';
import { FavouriteService } from 'src/app/favourites/shared/services/favourite/favourite.service';
import { RootState } from '../root.state';
import {
  getFavourites,
  getFavouritesSuccess,
  addMovieToFavourites,
  addMovieToFavouritesSuccess,
  AddMovieToFavouritesPayload,
  removeMovieFromFavourites,
  RemoveMovieFromFavouritesPayload,
  removeMovieFromFavouritesSuccess,
  addPersonalNoteToFavourite,
  addPersonalNoteToFavouriteSuccess,
  AddPersonalNoteToFavouritePayload,
} from './favourites.actions';
import { FunctionWithParametersType } from '@ngrx/store/src/models';

@Injectable()
export class FavouriteEffects {
  getFavourites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFavourites.type),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.pipe(select((state) => state.auth)))
        )
      ),
      mergeMap(([action, state]) =>
        this.favouriteService.getAll(state.loggedUser.localId).pipe(
          map((favourites) => ({
            type: getFavouritesSuccess.type,
            payload: {
              favourites,
            },
          }))
        )
      )
    )
  );

  addMovieToFavourites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMovieToFavourites.type),
      concatMap((action: { payload: AddMovieToFavouritesPayload }) =>
        of(action).pipe(
          withLatestFrom(this.store.pipe(select((state) => state.auth)))
        )
      ),
      mergeMap(([action, state]) =>
        this.favouriteService
          .addMovieToFavourites(state.loggedUser.localId, action.payload.movie)
          .pipe(
            map(() => ({
              type: addMovieToFavouritesSuccess.type,
              payload: {
                movie: action.payload.movie,
              },
            }))
          )
      )
    )
  );

  removeMovieFromFavourites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeMovieFromFavourites.type),
      concatMap((action: { payload: RemoveMovieFromFavouritesPayload }) =>
        of(action).pipe(
          withLatestFrom(this.store.pipe(select((state) => state.auth)))
        )
      ),
      mergeMap(([action, state]) =>
        this.favouriteService
          .removeMovieFromFavourites(
            state.loggedUser.localId,
            action.payload.movieId
          )
          .pipe(
            map(() => ({
              type: removeMovieFromFavouritesSuccess.type,
              payload: {
                movieId: action.payload.movieId,
              },
            }))
          )
      )
    )
  );

  addPersonalNoteToFavourite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPersonalNoteToFavourite.type),
      concatMap((action: { payload: AddPersonalNoteToFavouritePayload }) =>
        of(action).pipe(
          withLatestFrom(this.store.pipe(select((state) => state.auth)))
        )
      ),
      mergeMap(([action, state]) =>
        this.favouriteService
          .addPersonalNoteToFavourite(
            state.loggedUser.localId,
            action.payload.movieId,
            action.payload.personalNote
          )
          .pipe(
            map(() => ({
              type: addPersonalNoteToFavouriteSuccess.type,
              payload: {
                movieId: action.payload.movieId,
                personalNote: action.payload.personalNote,
              },
            }))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<RootState>,
    private favouriteService: FavouriteService
  ) {}
}
