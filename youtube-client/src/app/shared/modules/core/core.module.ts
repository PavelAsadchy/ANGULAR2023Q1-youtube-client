import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from '../../interceptors/youtube.interceptor';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchInputComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeInterceptor,
      multi: true,
    },
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
