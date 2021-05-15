import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieFullCastComponent } from './pages/movie-full-cast/movie-full-cast.component';
import { MovieAllReviewsComponent } from './pages/movie-all-reviews/movie-all-reviews.component';
import { MovieFullReviewComponent } from './pages/movie-full-review/movie-full-review.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'movies/:id/cast', component: MovieFullCastComponent },
  { path: 'movies/:id/reviews', component: MovieAllReviewsComponent },
  { path: 'movies/:id/reviews/:reviewId', component: MovieFullReviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
