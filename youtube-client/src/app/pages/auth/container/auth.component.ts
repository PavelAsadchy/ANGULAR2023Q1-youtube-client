import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginFormValue } from 'src/app/shared/models/login-form-value.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { ValidationService } from 'src/app/shared/services/validation.service';

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
  ) { }

  loginForm = this.fb.group({
    login: ['', {
      validators: [Validators.required, Validators.email]
    }],
    password: ['', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        ValidationService.passwordValidator,
      ]
    }],
  });

  onSubmit(): void {
    this.authService.setAuthToken(
      this.loginForm.value as LoginFormValue
    );
    this.navigateService.goTo(['/search']);
  }

  isFormControlValid(controlName: string): boolean {
    return ValidationService.isFormControlValid(
      this.loginForm,
      controlName
    );
  }

  getErrorMessage(controlName: string) {
    return ValidationService.getValidatorErrorMessage(
      this.loginForm,
      controlName
    );
  }
}
