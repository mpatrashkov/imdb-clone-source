import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/ui/services/request/request.service';
import { Movie } from 'src/app/movies/shared/types/movie';
import { search } from '../../endpoints';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  flatMap,
} from 'rxjs/operators';
import { apiKey } from 'src/app/config';
import { Observable } from 'rxjs';
import { SearchResult } from '../../types/searchResult';
import { GenreService } from 'src/app/genres/shared/services/genre/genre.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private request: RequestService,
    private genreService: GenreService
  ) {}

  search(query: Observable<string>) {
    return query.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((query) => this.searchRequest(query))
    );
  }

  private searchRequest(query: string) {
    return new Observable<SearchResult[]>((subscriber) => {
      if (query.length > 0) {
        const searchResult = this.request
          .get<{
            results: Movie[];
          }>(search, {
            api_key: apiKey,
            query,
          })
          .pipe(map((data) => data.results))
          .subscribe(async (movies) => {
            const searchResults: SearchResult[] = [];

            for (const movie of movies) {
              searchResults.push({
                id: movie.id,
                title: movie.original_title,
                release_date: movie.release_date,
                poster_path: movie.poster_path,
                genres: await this.genreService
                  .getGenresByIds(movie.genre_ids)
                  .toPromise(),
              });
            }

            subscriber.next(searchResults);
            searchResult.unsubscribe();
          });
      } else {
        subscriber.next([]);
      }
    });
  }
}
