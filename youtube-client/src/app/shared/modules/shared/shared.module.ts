import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    StatisticsComponent,
    MatButtonModule,
  ],
})
export class SharedModule { }
