import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './container/card.component';
import { DescriptionComponent } from './components/description/description.component';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    CardComponent,
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
  ],
})
export class CardModule { }
