import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginFormValue } from 'src/app/shared/models/login-form-value.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';

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
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.authService.setAuthToken(
      this.loginForm.value as LoginFormValue
    );
    this.navigateService.goTo(['/search']);
  }
}
