import { Component, OnInit, Input } from '@angular/core';
import { PosterSize } from 'src/app/movies/shared/types/movie';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  baseUrl: string = 'https://image.tmdb.org/t/p/';
  @Input() posterSize: PosterSize = 'w500';
  @Input() path: string;
  @Input() aspectRatio: number = 0;
  @Input() width: string = '100%';
  @Input() height: string = '0';
}
