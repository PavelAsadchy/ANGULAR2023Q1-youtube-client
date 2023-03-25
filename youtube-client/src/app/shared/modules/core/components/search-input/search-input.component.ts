import { Component, Output, EventEmitter } from '@angular/core';
import { SortBy } from 'src/app/shared/models/sort-by.model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  searchInput = '';
  settingsEnabled = true;
  resultsSearch = '';
  @Output()
  resultListEnabled = new EventEmitter<boolean>();
  sortByMode: SortBy = {
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
  }

  enableResultList() {
    this.resultListEnabled.emit(true);
  }

  toggleSettings() {
    this.settingsEnabled = !this.settingsEnabled;
  }

  sortBySelect(option: keyof SortBy) {
    for (let key in this.sortByMode) {
      if (key === option) {
        this.sortByMode[key].isModeOn = true;
        this.sortByMode[key].isUp = !this.sortByMode[key].isUp
      } else {
        this.sortByMode[key as keyof SortBy].isModeOn = false;
      }
    }
  }
}
