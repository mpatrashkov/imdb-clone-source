import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/types/movie';
import { MovieService } from '../../shared/services/movie/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-recommendations',
  templateUrl: './movie-recommendations.component.html',
  styleUrls: ['./movie-recommendations.component.scss'],
})
export class MovieRecommendationsComponent implements OnInit {
  recommendations$: Observable<Movie[]>;

  @Input() movieId: number;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.recommendations$ = this.movieService.getRecommendations(this.movieId);
  }
}
