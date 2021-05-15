import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieCastMember } from '../../shared/types/movieCastMember';
import { Observable } from 'rxjs';
import { MovieService } from '../../shared/services/movie/movie.service';
import { MovieOverview } from '../../shared/types/movieOverview';

@Component({
  selector: 'app-movie-full-cast',
  templateUrl: './movie-full-cast.component.html',
  styleUrls: ['./movie-full-cast.component.scss'],
})
export class MovieFullCastComponent {
  id: number;
  cast$: Observable<MovieCastMember[]>;
  movieOverview$: Observable<MovieOverview>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));

      this.cast$ = this.movieService.getCast(this.id);
      this.movieOverview$ = this.movieService.getMovieDetails(this.id);
    });
  }
}
