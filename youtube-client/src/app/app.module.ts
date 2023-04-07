import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { CardModule } from './pages/card/card.module';
import { SearchModule } from './pages/search/search.module';
import { SharedModule } from './shared/modules/shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CoreModule } from './shared/modules/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './pages/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    SearchModule,
    CardModule,
    CoreModule,
    BrowserAnimationsModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
