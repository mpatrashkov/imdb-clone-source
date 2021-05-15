export interface LoginSuccessfulResult {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
}

export interface LoginFailedResult {
  error: {
    code: number;
    message: string;
  };
}
