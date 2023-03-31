import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './container/search.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { SearchByStringPipe } from './pipes/search-by-string.pipe';


@NgModule({
  declarations: [
    SearchComponent,
    ResultListComponent,
    ResultItemComponent,
    SortByDatePipe,
    SortByViewsPipe,
    SearchByStringPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    SearchRoutingModule,
  ],
})
export class SearchModule { }
