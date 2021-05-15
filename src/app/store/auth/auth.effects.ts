import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';

import {
  login,
  loginSuccess,
  LoginPayload,
  loginFailed,
  signUp,
  signUpSuccess,
  signUpFailed,
  LoginSuccessPayload,
} from './auth.actions';
import { AuthService } from 'src/app/auth/shared/services/auth/auth.service';
import { of } from 'rxjs';
import { getFavourites } from '../favourites/favourites.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login.type),
      exhaustMap((action: { payload: LoginPayload }) =>
        this.authService
          .login(action.payload.email, action.payload.password)
          .pipe(
            map((loginResult) =>
              loginSuccess({
                payload: {
                  loggedIn: true,
                  loggedUser: {
                    email: loginResult.email,
                    localId: loginResult.localId,
                  },
                },
              })
            ),
            catchError(() => of(loginFailed()))
          )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUp.type),
      exhaustMap((action: { payload: LoginPayload }) =>
        this.authService
          .signUp(action.payload.email, action.payload.password)
          .pipe(
            map((loginResult) =>
              loginSuccess({
                payload: {
                  loggedIn: true,
                  loggedUser: {
                    email: loginResult.email,
                    localId: loginResult.localId,
                  },
                },
              })
            ),
            catchError(() => of(signUpFailed()))
          )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess.type),
      map((action: { payload: LoginSuccessPayload }) => getFavourites())
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
