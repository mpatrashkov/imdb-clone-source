import { Component, OnInit, Input } from '@angular/core';
import { MovieCastMember } from '../../shared/types/movieCastMember';
import { Observable } from 'rxjs';
import { MovieService } from '../../shared/services/movie/movie.service';
import { flatMap, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss'],
})
export class MovieCastComponent implements OnInit {
  fullCast$: Observable<MovieCastMember[]>;
  cast$: Observable<MovieCastMember[]>;

  @Input() movieId: number;
  @Input() showMembersCount = 10;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fullCast$ = this.movieService.getCast(this.movieId);
    this.cast$ = this.fullCast$.pipe(
      flatMap((member) => member),
      take(this.showMembersCount),
      toArray()
    );
  }
}
