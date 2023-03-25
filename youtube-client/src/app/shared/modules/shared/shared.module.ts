import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { StatisticsComponent } from './components/statistics/statistics.component';



@NgModule({
  declarations: [
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    StatisticsComponent,
  ],
})
export class SharedModule { }
