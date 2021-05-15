import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/ui/services/request/request.service';
import { Genre } from 'src/app/movies/shared/types/movieOverview';
import { genres } from '../../endpoints';
import {
  map,
  flatMap,
  filter,
  take,
  shareReplay,
  toArray,
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { apiKey } from 'src/app/config';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  genres$: Observable<Genre[]>;

  constructor(private request: RequestService) {}

  getGenres() {
    if (!this.genres$) {
      this.genres$ = this.request
        .get<{
          genres: Genre[];
        }>(genres, {
          api_key: apiKey,
        })
        .pipe(
          map((data) => data.genres),
          shareReplay(1)
        );
    }

    return this.genres$;
  }

  getGenreById(id: number) {
    return this.getGenres().pipe(
      flatMap((genre) => genre),
      filter((genre) => genre.id === id),
      take(1)
    );
  }

  getGenresByIds(ids: number[]) {
    return this.getGenres().pipe(
      flatMap((genre) => genre),
      filter((genre) => ids.includes(genre.id)),
      toArray()
    );
  }
}
