import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { AvatarComponent } from './components/avatar/avatar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchInputComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class CoreModule { }
