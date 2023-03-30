import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './container/card.component';
import { DescriptionComponent } from './components/description/description.component';
import { CoreModule } from 'src/app/shared/modules/core/core.module';



@NgModule({
  declarations: [
    CardComponent,
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
})
export class CardModule { }
