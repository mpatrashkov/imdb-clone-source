import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ImageModule } from '../image/image.module';
import { MovieRatingComponent } from './movie-rating/movie-rating.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [MovieCardComponent, MovieRatingComponent],
  imports: [CommonModule, ImageModule, RouterModule, PipesModule],
  exports: [MovieCardComponent, MovieRatingComponent],
})
export class MovieCardModule {}
