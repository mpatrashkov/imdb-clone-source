import { Component, Input } from '@angular/core';
import { MovieOverview } from '../../shared/types/movieOverview';

@Component({
  selector: 'app-movie-go-back',
  templateUrl: './movie-go-back.component.html',
  styleUrls: ['./movie-go-back.component.scss'],
})
export class MovieGoBackComponent {
  @Input() movieOverview: MovieOverview;
  @Input() text: string = 'Back to main';
  @Input() link: string = '../';
}
