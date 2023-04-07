import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigateService } from './navigate.service';
import { DEFAULT_USER_NAME, LocalStorageKeys } from '../consts';
import { LoginFormValue } from '../models/login-form-value.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private navigateService: NavigateService) { }

  public authName$: BehaviorSubject<string> = new BehaviorSubject(DEFAULT_USER_NAME);

  isAuthorized$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  setAuthToken(loginFormValue: LoginFormValue) {
    localStorage.setItem(
      LocalStorageKeys.AUTH_TOKEN,
      JSON.stringify(loginFormValue),
    );
  }

  getAuthToken(): string | null {
    const savedAuthObj = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    if (!savedAuthObj) return null;

    const savedAuthName: string = JSON.parse(savedAuthObj).login;
    this.authName$.next(savedAuthName);
    this.isAuthorized$.next(true);

    return savedAuthObj;
  }

  logout(): void {
    localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
    this.isAuthorized$.next(false);
    this.authName$.next(DEFAULT_USER_NAME);
    this.navigateService.goTo(['/login']);
  }
}
