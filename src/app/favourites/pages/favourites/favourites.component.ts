import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FavouritesState } from 'src/app/store/favourites/favourites.state';
import { Subject, Observable } from 'rxjs';
import { Movie } from 'src/app/movies/shared/types/movie';
import { getFavourites } from 'src/app/store/favourites/favourites.actions';
import { RootState } from 'src/app/store/root.state';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject<boolean>();

  favourites$: Observable<Movie[]>;

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.favourites$ = this.store.pipe(
      select((state) =>
        state.favourites.favourites
          ? Object.values(state.favourites.favourites)
          : []
      )
    );
    this.store.dispatch(getFavourites());
  }

  ngOnDestroy() {
    this.destroyed$.next(false);
    this.destroyed$.complete();
  }
}
