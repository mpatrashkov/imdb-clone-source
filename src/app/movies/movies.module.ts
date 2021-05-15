import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PipesModule } from '../ui/pipes/pipes.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { ReadMoreModule } from '../ui/components/read-more/read-more.module';
import { MovieCastComponent } from './components/movie-cast/movie-cast.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { MovieReviewsComponent } from './components/movie-reviews/movie-reviews.component';
import { MovieRecommendationsComponent } from './components/movie-recommendations/movie-recommendations.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieFullCastComponent } from './pages/movie-full-cast/movie-full-cast.component';
import { MovieCastMemberImageComponent } from './components/movie-cast-member-image/movie-cast-member-image.component';
import { MovieTitleComponent } from './components/movie-title/movie-title.component';
import { MovieAllReviewsComponent } from './pages/movie-all-reviews/movie-all-reviews.component';
import { MovieGoBackComponent } from './components/movie-go-back/movie-go-back.component';
import { MovieReviewComponent } from './components/movie-review/movie-review.component';
import { MovieFullReviewComponent } from './pages/movie-full-review/movie-full-review.component';
import { ImageModule } from '../ui/components/image/image.module';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from '../store/movies/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from '../store/movies/movies.effects';
import { MovieCardModule } from '../ui/components/movie-card/movie-card.module';
import { MoviePersonalNoteComponent } from './components/movie-personal-note/movie-personal-note.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailsComponent,
    MovieCastComponent,
    MovieReviewsComponent,
    MovieRecommendationsComponent,
    MovieInfoComponent,
    MovieFullCastComponent,
    MovieCastMemberImageComponent,
    MovieTitleComponent,
    MovieAllReviewsComponent,
    MovieGoBackComponent,
    MovieReviewComponent,
    MovieFullReviewComponent,
    MoviePersonalNoteComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PipesModule,
    ReadMoreModule,
    InlineSVGModule,
    ImageModule,
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MovieEffects]),
    MovieCardModule,
    ReactiveFormsModule,
  ],
  bootstrap: [HomeComponent],
})
export class MoviesModule {}
