import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootState } from 'src/app/store/root.state';
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class NotLoggedGuard implements CanActivate {
  constructor(private store: Store<RootState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select((state) => state.auth.loggedIn),
      map((data) => !data)
    );
  }
}
