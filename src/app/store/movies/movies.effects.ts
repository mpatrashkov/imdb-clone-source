import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { MovieService } from 'src/app/movies/shared/services/movie/movie.service';
import { mergeMap, map, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { nextPage, nextPageSuccess } from './movies.actions';
import { Store, select } from '@ngrx/store';
import { MoviesState } from './movies.state';
import { of } from 'rxjs';

@Injectable()
export class MovieEffects {
  nextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextPage.type),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.pipe(select((state) => state.movies)))
        )
      ),
      mergeMap(([action, state]) =>
        this.movieService.getPopularMovies(state.currentPage).pipe(
          map((movies) => ({
            type: nextPageSuccess.type,
            payload: {
              movies: [...state.popularMovies, ...movies],
              page: state.currentPage + 1,
            },
          }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ movies: MoviesState }>,
    private movieService: MovieService
  ) {}
}
