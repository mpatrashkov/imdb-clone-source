import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { loginSuccess, signUpSuccess, logout } from './auth.actions';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { payload }) => ({
    ...state,
    loggedUser: payload.loggedUser,
    loggedIn: payload.loggedIn,
  })),
  on(signUpSuccess, (state, { payload }) => ({
    ...state,
    loggedUser: payload.loggedUser,
    loggedIn: payload.loggedIn,
  })),
  on(logout, (state) => ({
    ...state,
    loggedUser: null,
    loggedIn: false,
  }))
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
