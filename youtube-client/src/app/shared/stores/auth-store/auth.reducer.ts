import { Action, createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './counter.actions';
import * as AuthActions from './auth.actions';
import { AuthState, INITIAL_AUTH_STATE } from './auth.state';

// export const initialState = 0;

// export const authReducer = createReducer(
//   INITIAL_AUTH_STATE,
//   on(increment, (state) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );

const authReducer = createReducer(
  INITIAL_AUTH_STATE(),
  on(AuthActions.AUTH_SUCCESS_ACTION, (state, { loggedInUser }) => ({
    ...state,
    isLoggedIn: true,
    username: loggedInUser.login,
    errorMessage: null,
  })),
  on(AuthActions.AUTH_FAILURE_ACTION, (state, { errorMessage }) => ({
    ...state,
    isLoggedIn: false,
    username: null,
    errorMessage,
  })),
  on(AuthActions.AUTH_LOGOUT_ACTION, (state) => ({
    ...state,
    isLoggedIn: false,
    user: null,
    errorMessage: null,
  }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}