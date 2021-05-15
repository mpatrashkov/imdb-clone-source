import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/ui/services/request/request.service';
import {
  moviePopular,
  movieDetails,
  movieCast,
  movieReviews,
  movieRecommnedations,
} from '../../endpoints';

import { map } from 'rxjs/operators';
import { Movie } from '../../types/movie';
import { MovieOverview } from '../../types/movieOverview';
import { MovieCastMember } from '../../types/movieCastMember';
import { MovieReview } from '../../types/movieReview';
import { HttpParams } from '@angular/common/http';
import { apiKey } from 'src/app/config';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private request: RequestService) {}

  getPopularMovies(pageId: number = 1) {
    return this.request
      .get<{
        results: Movie[];
      }>(moviePopular, {
        api_key: apiKey,
        page: pageId.toString(),
      })
      .pipe(map((data) => data.results));
  }

  getMovieDetails(movieId: number) {
    return this.request.get<MovieOverview>(movieDetails(movieId), {
      api_key: apiKey,
    });
  }

  getCast(movieId: number) {
    return this.request
      .get<{
        cast: MovieCastMember[];
      }>(movieCast(movieId), {
        api_key: apiKey,
      })
      .pipe(map((data) => data.cast));
  }

  getReviews(movieId: number) {
    return this.request
      .get<{
        results: MovieReview[];
      }>(movieReviews(movieId), {
        api_key: apiKey,
      })
      .pipe(map((data) => data.results));
  }

  getRecommendations(movieId: number) {
    return this.request
      .get<{
        results: Movie[];
      }>(movieRecommnedations(movieId), {
        api_key: apiKey,
      })
      .pipe(map((data) => data.results));
  }
}
