import { Component, OnInit, Input } from '@angular/core';
import { MovieReview } from '../../shared/types/movieReview';
import { MovieService } from '../../shared/services/movie/movie.service';
import { Observable } from 'rxjs';
import { flatMap, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.scss'],
})
export class MovieReviewsComponent implements OnInit {
  reviews$: Observable<MovieReview[]>;
  allReviews$: Observable<MovieReview[]>;

  @Input() movieId: number;
  @Input() showReviewsCount = 3;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.allReviews$ = this.movieService.getReviews(this.movieId);
    this.reviews$ = this.allReviews$.pipe(
      flatMap((review) => review),
      take(this.showReviewsCount),
      toArray()
    );
  }
}
