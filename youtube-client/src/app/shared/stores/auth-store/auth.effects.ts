import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as AuthActions from './auth.actions';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LoginFormValue } from '../../models/login-form-value.model';
import { NavigateService } from '../../services/navigate.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
    private readonly navigateService: NavigateService,
    // private router: Router,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.ActionsType.LOGIN),
      map((action: { user: LoginFormValue, type: string }) => action.user),
      switchMap((user: LoginFormValue) => {
        return this.authService.doLogin(user)
          .pipe(
            map(() => {
              return AuthActions.AUTH_SUCCESS_ACTION({
                loggedInUser: user,
              });
            }),
            catchError((err) => of(AuthActions.AUTH_FAILURE_ACTION({
              errorMessage: err,
            }))),
          );
      }),
    ),
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.ActionsType.LOGIN_SUCCESS),
      // map((action: { loggedInUser: LoginFormValue; type: string }) => action.loggedInUser),
      tap(() => {
        // this.authService.doLoginUser(loggedInUser);
        this.navigateService.goTo(['/search']);
        // this.store.dispatch(
        //   SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.loginSuccess })
        // );
      })
    ),
    { dispatch: false }
  );

  // loginFailure$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthActions.ActionsType.LOGIN_FAILURE),
  //       tap(() =>
  //         this.store.dispatch(
  //           SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.loginFailure })
  //         )
  //       )
  //     ),
  //   { dispatch: false }
  // );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.ActionsType.LOGOUT),
      tap(() => this.authService.logout()),
    ),
    { dispatch: false }
  );

  // refreshToken$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.ActionsType.REFRESH_TOKEN),
  //     switchMap(() => {
  //       return this.authService.refreshToken().pipe(
  //         map((jwt: string) => {
  //           return AuthActions.AUTH_REFRESH_TOKEN_SUCCESS({ jwt });
  //         }),
  //         catchError((error) =>
  //           of(AuthActions.AUTH_REFRESH_TOKEN_FAILURE_ACTION({ err: error }))
  //         )
  //       );
  //     })
  //   )
  // );

  // refreshTokenSuccess$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthActions.ActionsType.REFRESH_TOKEN_SUCCESS),
  //       tap((jwt: string) => {
  //         this.authService.storeJwtToken(jwt);
  //       })
  //     ),
  //   { dispatch: false }
  // );

  // refreshTokenFailure$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthActions.ActionsType.REFRESH_TOKEN_FAILURE_ACTION)
  //     ),
  //   { dispatch: false }
  // );
}