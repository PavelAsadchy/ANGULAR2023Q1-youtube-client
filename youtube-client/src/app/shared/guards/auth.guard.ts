import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NavigateService } from '../services/navigate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {

  constructor(
    private authService: AuthService,
    private navigateService: NavigateService,
  ) { }

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getAuthToken()) {
      return true;
    } else {
      this.navigateService.goTo(['/login']);
    }
    
    return false;
  }
}
