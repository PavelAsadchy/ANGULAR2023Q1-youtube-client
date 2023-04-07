import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  resultListEnabled = false;

  enableResultList(isEnabled: boolean) {
    this.resultListEnabled = isEnabled;
  }
}
