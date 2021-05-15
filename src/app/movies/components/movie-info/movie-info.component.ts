import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../shared/types/movie';
import { MovieOverview } from '../../shared/types/movieOverview';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { RootState } from 'src/app/store/root.state';
import { take } from 'rxjs/operators';
import {
  addMovieToFavourites,
  removeMovieFromFavourites,
} from 'src/app/store/favourites/favourites.actions';
import { Favourite } from 'src/app/favourites/shared/types/favourite';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  @Input() movieOverview: MovieOverview;

  loggedIn$: Observable<boolean>;
  favourite$: Observable<boolean>;

  constructor(private router: Router, private store: Store<RootState>) {}

  ngOnInit() {
    this.loggedIn$ = this.store.pipe(select((state) => state.auth.loggedIn));
    this.favourite$ = this.store.pipe(
      select(
        (state) =>
          state.favourites.favourites &&
          state.favourites.favourites[this.movieOverview.id] !== undefined
      )
    );
  }

  favourite() {
    this.loggedIn$.pipe(take(1)).subscribe((loggedIn) => {
      if (loggedIn) {
        this.store.dispatch(
          addMovieToFavourites({
            payload: {
              movie: this.getMovieObject,
            },
          })
        );
      } else {
        this.router.navigate(['/auth/signIn'], {
          queryParams: {
            ref: this.router.url,
          },
        });
      }
    });
  }

  unfavourite() {
    this.store.dispatch(
      removeMovieFromFavourites({
        payload: {
          movieId: this.movieOverview.id,
        },
      })
    );
  }

  private get getMovieObject(): Favourite {
    return {
      ...this.movieOverview,
      genre_ids: this.movieOverview.genres.map((genre) => genre.id),
      personalNote: '',
    };
  }
}
