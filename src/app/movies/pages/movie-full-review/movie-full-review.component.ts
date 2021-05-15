import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieReview } from '../../shared/types/movieReview';
import { Observable } from 'rxjs';
import { MovieOverview } from '../../shared/types/movieOverview';
import { MovieService } from '../../shared/services/movie/movie.service';
import { filter, flatMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-full-review',
  templateUrl: './movie-full-review.component.html',
  styleUrls: ['./movie-full-review.component.scss'],
})
export class MovieFullReviewComponent {
  id: number;
  reviewId: string;

  review$: Observable<MovieReview>;
  movieOverview$: Observable<MovieOverview>;

  refUrl: string = '../';
  refText: string = 'main';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.queryParamMap.subscribe((paramMap) => {
      this.refUrl = paramMap.get('ref');
      const path = this.refUrl.split('/').pop();
      if (path === 'reviews') {
        this.refText = 'reviews';
      }
    });

    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));
      this.reviewId = paramMap.get('reviewId');

      this.movieOverview$ = this.movieService.getMovieDetails(this.id);
      this.review$ = this.movieService.getReviews(this.id).pipe(
        flatMap((review) => review),
        filter((review) => review.id === this.reviewId),
        take(1)
      );
    });
  }
}
