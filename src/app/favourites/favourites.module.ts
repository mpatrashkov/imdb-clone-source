import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../ui/pipes/pipes.module';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { FavouritesRouting } from './favourites-routing.module';
import { MovieCardModule } from '../ui/components/movie-card/movie-card.module';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    FavouritesRouting,
    MovieCardModule,
  ],
})
export class FavouritesModule {}
