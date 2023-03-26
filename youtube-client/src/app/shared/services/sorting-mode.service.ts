import { Injectable } from '@angular/core';
import { SortBy } from '../models/sort-by.model';

@Injectable({
  providedIn: 'root'
})
export class SortingModeService {

  constructor() { }

  resultsSearch = '';
  sortingMode: SortBy = {
    date: {
      label: 'date',
      isModeOn: false,
      isUp: false,
    },
    viewsCount: {
      label: 'count of views',
      isModeOn: false,
      isUp: false,
    },
  };

  sortingModeSelect(option: keyof SortBy): void {
    for (let key in this.sortingMode) {
      if (key === option) {
        this.sortingMode[key].isModeOn = true;
        this.sortingMode[key].isUp = !this.sortingMode[key].isUp
      } else {
        this.sortingMode[key as keyof SortBy].isModeOn = false;
      }
    }
  }
}
