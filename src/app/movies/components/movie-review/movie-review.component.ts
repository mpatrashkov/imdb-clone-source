import { Component, Input } from '@angular/core';
import { MovieReview } from '../../shared/types/movieReview';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.scss'],
})
export class MovieReviewComponent {
  @Input() review: MovieReview;
  @Input() length: number = 150;

  id: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));
    });
  }

  readMoreClicked() {
    this.router.navigate(['/movies', this.id, 'reviews', this.review.id], {
      queryParams: {
        ref: this.router.url,
      },
    });
  }
}
