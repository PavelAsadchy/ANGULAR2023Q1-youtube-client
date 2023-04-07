import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './container/admin.component';
import { SharedModule } from '../../shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class AdminModule { }
