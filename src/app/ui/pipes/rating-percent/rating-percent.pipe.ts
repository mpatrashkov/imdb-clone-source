import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingPercent',
})
export class RatingPercentPipe implements PipeTransform {
  transform(value: number, min: number = 0, max: number = 10): number {
    return Math.round(((value - min) / (max - min)) * 100);
  }
}
