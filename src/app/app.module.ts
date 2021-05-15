import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { MoviesModule } from './movies/movies.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from './store/auth/auth.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { FavouritesModule } from './favourites/favourites.module';
import { FavouriteEffects } from './store/favourites/favourites.effects';
import { favouritesReducer } from './store/favourites/favourites.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    MoviesModule,
    AuthModule,
    FavouritesModule,
    HttpClientModule,
    InlineSVGModule,
    StoreModule.forRoot({
      auth: authReducer,
      favourites: favouritesReducer,
    }),
    EffectsModule.forRoot([AuthEffects, FavouriteEffects]),
    StoreDevtoolsModule.instrument({
      name: 'IMDb clone',
    }),
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
