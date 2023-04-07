import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/container/card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProceedToCardGuard } from './shared/guards/proceed-to-card.guard';
import { AdminComponent } from './pages/admin/container/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/pages/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('src/app/pages/search/search.module')
      .then(m => m.SearchModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'search/:id',
    component: CardComponent,
    canActivate: [ProceedToCardGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
