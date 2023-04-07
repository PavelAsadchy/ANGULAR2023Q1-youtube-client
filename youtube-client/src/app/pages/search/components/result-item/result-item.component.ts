import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YoutubeItem } from '../../../../shared/models/youtube-item.model';
import { GetMonthLag } from '../../../../shared/utils/get-month-lag';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultItemComponent implements OnInit, AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) { }

  @Input()
    item!: YoutubeItem;

  @Output()
    selectedItem: EventEmitter<YoutubeItem> = new EventEmitter<YoutubeItem>();

  monthsLag!: number;

  ngOnInit() {
    this.monthsLag = GetMonthLag.countValue(
      new Date(this.item.snippet.publishedAt),
    );
  }

  /*
  'appSearchItemBorderBottomColor' value changes after change detection has completed,
  it throws 'ExpressionChangedAfterItHasBeenCheckedError' error in development mode.
  Solution in this case is to manually trigger change detection for the current component.
  */
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  selectItem(): void {
    this.selectedItem.emit(this.item);
  }
}
