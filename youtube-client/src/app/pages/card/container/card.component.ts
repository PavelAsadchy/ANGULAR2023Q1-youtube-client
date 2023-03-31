import { Component } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { SelectedItemService } from 'src/app/shared/services/selected-item.service';
import { GetMonthLag } from 'src/app/shared/utils/get-month-lag';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(
    public selectedItemService: SelectedItemService,
    private navigateService: NavigateService
  ) { }

  monthsLag!: number;

  ngOnInit() {
    if (this.selectedItemService.selected?.snippet.publishedAt) {
      this.monthsLag = GetMonthLag.countValue(
        new Date(this.selectedItemService.selected?.snippet.publishedAt)
      );
    }
  }

  returnToSearchResults(): void {
    this.selectedItemService.clearSelected();
    this.navigateService.goTo(['/search']);
  }
}
