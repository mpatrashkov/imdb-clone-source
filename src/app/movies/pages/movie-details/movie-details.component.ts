import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieOverview } from '../../shared/types/movieOverview';
import { Observable, Subject } from 'rxjs';
import { MovieService } from '../../shared/services/movie/movie.service';
import { Store, select } from '@ngrx/store';
import { MoviesState } from 'src/app/store/movies/movies.state';
import { RootState } from 'src/app/store/root.state';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnDestroy {
  id: number;
  movieOverview$: Observable<MovieOverview>;

  favourited$: Observable<boolean>;

  destroyed$ = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private store: Store<RootState>
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));

      this.movieOverview$ = movieService.getMovieDetails(this.id);

      this.movieOverview$
        .pipe(takeUntil(this.destroyed$))
        .subscribe((movieOverview) => {
          this.favourited$ = this.store.pipe(
            select(
              (state) =>
                state.favourites.favourites &&
                state.favourites.favourites[movieOverview.id] !== undefined
            )
          );
        });
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
