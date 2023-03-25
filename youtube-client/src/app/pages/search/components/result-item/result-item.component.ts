import { Component, Input } from '@angular/core';
import { YoutubeItem } from 'src/app/shared/models/youtube-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {
  @Input()
  item!: YoutubeItem;
}
