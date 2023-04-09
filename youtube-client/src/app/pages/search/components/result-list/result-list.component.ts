import { Component } from '@angular/core';
import { YoutubeItem } from '../../../../shared/models/youtube-item.model';
import { SortingModeService } from '../../../../shared/services/sorting-mode.service';
import { NavigateService } from '../../../../shared/services/navigate.service';
import { SelectedItemService } from '../../../../shared/services/selected-item.service';
import { SearchService } from '../../../../shared/services/search.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  constructor(
    public sortingModeService: SortingModeService,
    public searchService: SearchService,
    private navigateService: NavigateService,
    private selectedItemService: SelectedItemService,
  ) {}

  selectItem(item: YoutubeItem): void {
    this.selectedItemService.initSlected(item);
    this.navigateService.goTo(['/search', item.id]);
  }
}
