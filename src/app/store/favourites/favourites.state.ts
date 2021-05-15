import { Favourite } from 'src/app/favourites/shared/types/favourite';

export interface FavouritesState {
  favourites: {
    [key: number]: Favourite;
  };
}

export const initialState: FavouritesState = {
  favourites: {},
};
