import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedGuard } from '../auth/shared/guards/logged/logged.guard';
import { FavouritesComponent } from './pages/favourites/favourites.component';

const routes: Routes = [
  {
    path: 'all',
    component: FavouritesComponent,
    canActivate: [LoggedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouritesRouting {}
