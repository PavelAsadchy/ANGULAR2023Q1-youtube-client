import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './container/card.component';
import { DescriptionComponent } from './components/description/description.component';



@NgModule({
  declarations: [
    CardComponent,
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class CardModule { }
