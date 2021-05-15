import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss'],
})
export class MovieRatingComponent {
  @Input() rating: number;
  @Input() styles: {
    high: string;
    normal: string;
    low: string;
  };
  @Input() suffix: string = '%';

  @HostBinding('className') get className() {
    if (this.styles) {
      if (this.rating >= 7) {
        return this.styles.high;
      } else if (this.rating >= 4) {
        return this.styles.normal;
      } else {
        return this.styles.low;
      }
    }
  }
}
