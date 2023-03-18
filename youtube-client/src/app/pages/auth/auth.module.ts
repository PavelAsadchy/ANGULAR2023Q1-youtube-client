import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './container/auth.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';


@NgModule({
  declarations: [
    AuthComponent,
    AuthFormComponent,
    FormInputComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
