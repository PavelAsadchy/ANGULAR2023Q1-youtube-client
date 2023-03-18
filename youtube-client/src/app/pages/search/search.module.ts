import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './container/search.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultItemComponent } from './components/result-item/result-item.component';


@NgModule({
  declarations: [
    SearchComponent,
    ResultListComponent,
    ResultItemComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
  ],
})
export class SearchModule { }
