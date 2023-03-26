import { Component, Output, EventEmitter } from '@angular/core';
import { SortingModeService } from 'src/app/shared/services/sorting-mode.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  constructor(public sortingModeService: SortingModeService) {}

  searchInput = '';
  settingsEnabled = true;

  @Output()
  resultListEnabled = new EventEmitter<boolean>();

  enableResultList(): void {
    this.resultListEnabled.emit(true);
  }

  toggleSettings(): void {
    this.settingsEnabled = !this.settingsEnabled;
  }
}
