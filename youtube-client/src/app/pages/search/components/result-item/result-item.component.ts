import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YoutubeItem } from 'src/app/shared/models/youtube-item.model';
import { GetMonthLag } from 'src/app/shared/utils/get-month-lag';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultItemComponent implements OnInit {
  @Input()
  item!: YoutubeItem;

  @Output()
  selectedItem: EventEmitter<YoutubeItem> = new EventEmitter<YoutubeItem>();

  monthsLag!: number;

  ngOnInit() {
    this.monthsLag = GetMonthLag.countValue(
      new Date(this.item.snippet.publishedAt)
    );
  }

  selectItem(): void {
    this.selectedItem.emit(this.item);
  }
}
