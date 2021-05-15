import { dataUrl } from 'src/app/config';

export const favourites = (localId: string) =>
  `${dataUrl}/favorites/${localId}.json`;

export const putFavourite = (localId: string, movieId: number) =>
  `${dataUrl}/favorites/${localId}/${movieId}.json`;
