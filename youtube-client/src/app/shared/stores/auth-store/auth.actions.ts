import { createAction, props } from '@ngrx/store';
import { LoginFormValue } from '../../models/login-form-value.model';

export enum ActionsType {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Success',
  LOGIN_FAILURE = '[AUTH] Failure',
  LOGOUT = '[AUTH] Logout',
}

export const AUTH_LOGIN_ACTION = createAction(
  ActionsType.LOGIN,
  props<{ user: LoginFormValue }>()
);

export const AUTH_SUCCESS_ACTION = createAction(
  ActionsType.LOGIN_SUCCESS,
  props<{ loggedInUser: LoginFormValue }>()
);

export const AUTH_FAILURE_ACTION = createAction(
  ActionsType.LOGIN_FAILURE,
  props<{ errorMessage: string }>()
);

export const AUTH_LOGOUT_ACTION = createAction(ActionsType.LOGOUT);
