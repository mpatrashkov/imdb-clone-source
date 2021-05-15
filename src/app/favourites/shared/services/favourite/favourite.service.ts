import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/ui/services/request/request.service';
import { Movie } from 'src/app/movies/shared/types/movie';
import { Observable } from 'rxjs';
import { dataKey } from 'src/app/config';
import { favourites, putFavourite } from '../../endpoints';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  constructor(private request: RequestService) {}

  getAll(
    localId: string
  ): Observable<{
    [key: number]: Movie;
  }> {
    return this.request.get<{
      [key: number]: Movie;
    } | null>(favourites(localId), {
      key: dataKey,
    });
  }

  addMovieToFavourites(localId: string, movie: Movie): Observable<never> {
    return this.request.put(putFavourite(localId, movie.id), movie, {
      key: dataKey,
    });
  }

  removeMovieFromFavourites(
    localId: string,
    movieId: number
  ): Observable<never> {
    return this.request.delete(putFavourite(localId, movieId), {
      key: dataKey,
    });
  }

  addPersonalNoteToFavourite(
    localId: string,
    movieId: number,
    personalNote: string
  ): Observable<never> {
    return this.request.patch(
      putFavourite(localId, movieId),
      {
        personalNote,
      },
      {
        key: dataKey,
      }
    );
  }
}
