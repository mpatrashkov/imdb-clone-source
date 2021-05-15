import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/types/movie';
import { MovieOverview } from '../../shared/types/movieOverview';

@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.scss'],
})
export class MovieTitleComponent {
  @Input() movieOverview: MovieOverview;
}
