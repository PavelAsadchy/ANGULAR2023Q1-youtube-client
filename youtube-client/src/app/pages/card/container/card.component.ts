import { ChangeDetectorRef, Component } from '@angular/core';
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
    private navigateService: NavigateService,
    private cdr: ChangeDetectorRef,
  ) { }

  monthsLag!: number;

  ngOnInit() {
    if (this.selectedItemService.selected?.snippet.publishedAt) {
      this.monthsLag = GetMonthLag.countValue(
        new Date(this.selectedItemService.selected?.snippet.publishedAt)
      );
    }
  }

  /*
  'searchItemBorderBottomColor' value changes after change detection has completed,
  it throws 'ExpressionChangedAfterItHasBeenCheckedError' error in development mode.
  Solution in this case is to manually trigger change detection for the current component.
  */
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  returnToSearchResults(): void {
    this.selectedItemService.clearSelected();
    this.navigateService.goTo(['/search']);
  }
}
