import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginFormValue } from '../../../shared/models/login-form-value.model';
import { AuthService } from '../../../shared/services/auth.service';
import { NavigateService } from '../../../shared/services/navigate.service';
import { ValidationService } from '../../../shared/services/validation.service';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/shared/stores/auth-store/auth.state';
import { AUTH_LOGIN_ACTION } from 'src/app/shared/stores/auth-store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public navigateService: NavigateService,
    private store: Store<AuthState>,
  ) { }

  loginForm = this.fb.group({
    login: ['', {
      validators: [Validators.required, Validators.email],
    }],
    password: ['', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        ValidationService.passwordValidator,
      ],
    }],
  });

  onSubmit(): void {
    this.store.dispatch(AUTH_LOGIN_ACTION({ user: this.loginForm.value as LoginFormValue }));
    // this.authService.setAuthToken(
    //   this.loginForm.value as LoginFormValue,
    // );
    // this.navigateService.goTo(['/search']);
  }

  isFormControlValid(controlName: string): boolean {
    return ValidationService.isFormControlValid(
      this.loginForm,
      controlName,
    );
  }

  getErrorMessage(controlName: string) {
    return ValidationService.getValidatorErrorMessage(
      this.loginForm,
      controlName,
    );
  }
}
