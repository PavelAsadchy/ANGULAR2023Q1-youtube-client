import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { YoutubeItem } from 'src/app/shared/models/youtube-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultItemComponent {
  @Input()
  item!: YoutubeItem;

  @Output()
  selectedItem: EventEmitter<YoutubeItem> = new EventEmitter<YoutubeItem>();

  selectItem(): void {
    this.selectedItem.emit(this.item);
  }
}
