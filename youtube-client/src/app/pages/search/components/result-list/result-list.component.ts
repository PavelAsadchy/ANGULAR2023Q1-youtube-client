import { Component } from '@angular/core';
import { YoutubeItem } from '../../../../shared/models/youtube-item.model';
import { SortingModeService } from '../../../../shared/services/sorting-mode.service';
import { _mockedData } from './_mockedData';
import { NavigateService } from '../../../../shared/services/navigate.service';
import { SelectedItemService } from '../../../../shared/services/selected-item.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  constructor(
    public sortingModeService: SortingModeService,
    private navigateService: NavigateService,
    private selectedItemService: SelectedItemService,
  ) {}

  resultList: YoutubeItem[] = _mockedData;

  selectItem(item: YoutubeItem): void {
    this.selectedItemService.initSlected(item);
    this.navigateService.goTo(['/search', item.id]);
  }
}
