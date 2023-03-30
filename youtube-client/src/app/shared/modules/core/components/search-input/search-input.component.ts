import { Component } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { SortingModeService } from 'src/app/shared/services/sorting-mode.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  constructor(
    public sortingModeService: SortingModeService,
    public searchService: SearchService,
  ) {}

  searchInput = '';
  settingsEnabled = false;

  enableResultList(): void {
    this.searchService.enableResultList(true);
  }

  toggleSettings(): void {
    this.settingsEnabled = !this.settingsEnabled;
  }
}
