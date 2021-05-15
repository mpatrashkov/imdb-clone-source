export interface AuthState {
  loggedIn: boolean;
  loggedUser: {
    email: string;
    localId: string;
  } | null;
}

export const initialState: AuthState = {
  loggedIn: false,
  loggedUser: null,
};
