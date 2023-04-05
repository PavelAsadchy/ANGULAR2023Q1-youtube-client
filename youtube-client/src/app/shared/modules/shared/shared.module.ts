import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SearchItemBorderBottomColorDirective } from 'src/app/shared/directives/searchItemBorderBottomColor.directive';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    StatisticsComponent,
    SearchItemBorderBottomColorDirective,
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
    MatCardModule,
    SearchItemBorderBottomColorDirective,
    MatTooltipModule,
  ],
})
export class SharedModule { }
