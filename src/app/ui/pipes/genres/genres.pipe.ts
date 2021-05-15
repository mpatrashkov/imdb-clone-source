import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from 'src/app/movies/shared/types/movieOverview';

@Pipe({
  name: 'genres',
})
export class GenresPipe implements PipeTransform {
  transform(value: Genre[]): string {
    return value.map((genre) => genre.name).join(', ');
  }
}
