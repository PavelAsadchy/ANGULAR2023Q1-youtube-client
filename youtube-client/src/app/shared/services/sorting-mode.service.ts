import { Injectable } from '@angular/core';
import { SortBy } from '../models/sort-by.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortingModeService {

  resultsSearch = '';

  isSearchEnabled$: BehaviorSubject<boolean> = new BehaviorSubject(true);

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
    for (const key in this.sortingMode) {
      if (key === option) {
        this.sortingMode[key].isModeOn = true;
        this.sortingMode[key].isUp = !this.sortingMode[key].isUp;
      } else {
        this.sortingMode[key as keyof SortBy].isModeOn = false;
      }
    }
  }
}
