import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/types/movie';
import { MovieService } from '../../shared/services/movie/movie.service';
import { Subscription, Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
import { Store, select } from '@ngrx/store';
import { MoviesState } from 'src/app/store/movies/movies.state';
import { nextPage } from 'src/app/store/movies/movies.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies$: Observable<Movie[]>;

  pageId: number = 0;

  moviesResult: Subscription;

  constructor(
    private movieService: MovieService,
    private store: Store<{ movies: MoviesState }>
  ) {}

  ngOnInit() {
    this.movies$ = this.store.pipe(
      select((state) => state.movies.popularMovies)
    );
    this.store
      .pipe(
        select((state) => state.movies.currentPage),
        take(1)
      )
      .subscribe((page) => {
        if (page === 1) {
          this.loadMore();
        }
      });
  }

  loadMore() {
    this.store.dispatch(nextPage());
  }
}
