import { createAction, props } from '@ngrx/store';
import { AuthState } from './auth.state';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginSuccessPayload {
  loggedUser: AuthState['loggedUser'];
  loggedIn: boolean;
}

export const login = createAction(
  '[Auth] Login',
  props<{
    payload: LoginPayload;
  }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{
    payload: LoginSuccessPayload;
  }>()
);

export const loginFailed = createAction('[Auth] Login Failed');

export const signUp = createAction(
  '[Auth] Sign Up',
  props<{
    payload: LoginPayload;
  }>()
);

export const signUpSuccess = createAction(
  '[Auth] Sign Up Success',
  props<{
    payload: {
      loggedUser: AuthState['loggedUser'];
      loggedIn: boolean;
    };
  }>()
);

export const signUpFailed = createAction('[Auth] Sign Up Failed');

export const logout = createAction('[Auth] Logout');
