import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootState } from 'src/app/store/root.state';
import {
  addMovieToFavourites,
  removeMovieFromFavourites,
} from 'src/app/store/favourites/favourites.actions';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Movie } from 'src/app/movies/shared/types/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  loggedIn$: Observable<boolean>;
  favourite$: Observable<boolean>;

  constructor(private router: Router, private store: Store<RootState>) {}

  ngOnInit() {
    this.loggedIn$ = this.store.pipe(select((state) => state.auth.loggedIn));
    this.favourite$ = this.store.pipe(
      select(
        (state) =>
          state.favourites.favourites &&
          state.favourites.favourites[this.movie.id] !== undefined
      )
    );
  }

  favourite($event) {
    $event.stopPropagation();
    $event.preventDefault();

    this.loggedIn$.pipe(take(1)).subscribe((loggedIn) => {
      if (loggedIn) {
        this.store.dispatch(
          addMovieToFavourites({
            payload: {
              movie: {
                ...this.movie,
                personalNote: '',
              },
            },
          })
        );
      } else {
        this.router.navigate(['/auth/signIn']);
      }
    });
  }

  unfavourite($event) {
    $event.stopPropagation();
    $event.preventDefault();

    this.store.dispatch(
      removeMovieFromFavourites({
        payload: {
          movieId: this.movie.id,
        },
      })
    );
  }
}
