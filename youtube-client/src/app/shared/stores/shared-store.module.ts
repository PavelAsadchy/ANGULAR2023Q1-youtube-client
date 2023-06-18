import { NgModule } from '@angular/core';
import { AuthStoreModule } from './auth-store/auth-store.module';

@NgModule({
  imports: [AuthStoreModule],
})
export class SharedStoreModule {}