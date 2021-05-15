import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { RootState } from 'src/app/store/root.state';
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  constructor(private store: Store<RootState>, public router: Router) {}

  canActivate(): Observable<boolean> {
    const loggedIn$ = this.store.pipe(
      select((state) => state.auth.loggedIn),
      take(1)
    );
    loggedIn$.subscribe((loggedIn) => {
      if (!loggedIn) {
        this.router.navigate(['/auth/signIn']);
      }
    });
    return loggedIn$;
  }
}
