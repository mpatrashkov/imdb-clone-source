import { Component } from '@angular/core';

import { Movie } from '../../shared/types/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieReview } from '../../shared/types/movieReview';
import { Observable } from 'rxjs';
import { MovieOverview } from '../../shared/types/movieOverview';
import { MovieService } from '../../shared/services/movie/movie.service';

@Component({
  selector: 'app-movie-all-reviews',
  templateUrl: './movie-all-reviews.component.html',
  styleUrls: ['./movie-all-reviews.component.scss'],
})
export class MovieAllReviewsComponent {
  id: number;
  movieOverview$: Observable<MovieOverview>;
  reviews$: Observable<MovieReview[]>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));

      this.reviews$ = this.movieService.getReviews(this.id);
      this.movieOverview$ = this.movieService.getMovieDetails(this.id);
    });
  }
}
