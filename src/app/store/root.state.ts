import { initialState as authInitialState, AuthState } from './auth/auth.state';
import {
  initialState as favouritesInitialState,
  FavouritesState,
} from './favourites/favourites.state';

export interface RootState {
  auth: AuthState;
  favourites: FavouritesState;
}

export const initialState: RootState = {
  auth: authInitialState,
  favourites: favouritesInitialState,
};
