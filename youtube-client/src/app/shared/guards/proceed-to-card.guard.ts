import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectedItemService } from '../services/selected-item.service';
import { NavigateService } from '../services/navigate.service';

@Injectable({
  providedIn: 'root'
})
export class ProceedToCardGuard {
  constructor(
    private selectedItemService: SelectedItemService,
    private navigateService: NavigateService,
  ) { 

  }
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.selectedItemService.selected) {
      return true;
    } else {
        this.navigateService.goTo(['/search']);
    }

    return false;
  }
}
