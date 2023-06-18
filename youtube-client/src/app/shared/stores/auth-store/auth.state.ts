import { LocalStorageKeys } from '../../consts';

export interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  errorMessage: string | null;
}

export const INITIAL_AUTH_STATE = (): AuthState => {
  const savedAuthObj = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);

  return savedAuthObj
    ? {
        isLoggedIn: true,
        username: JSON.parse(savedAuthObj).login,
        errorMessage: null,
    } : {
      isLoggedIn: false,
      username: null,
      errorMessage: null,
    };
};
