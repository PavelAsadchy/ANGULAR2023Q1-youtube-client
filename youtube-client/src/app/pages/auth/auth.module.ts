import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './container/auth.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    AuthFormComponent,
    FormInputComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
