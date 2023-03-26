import { Component, Input, OnInit, Output } from '@angular/core';
import { YoutubeItem } from 'src/app/shared/models/youtube-item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input()
  item!: YoutubeItem;
  // @Output()
  // datesLag!: number;
  // publishedAt!: Date;

  ngOnInit(): void {
    // this.setPublishedAt();
    // this.setDatesLag();
  }

  // public setPublishedAt(): void {
  //   this.publishedAt = new Date(this.item.snippet.publishedAt);
  // }

  // public setDatesLag(): void {
  //   const today: Date = new Date();
  //   this.datesLag = ((today.getTime() - this.publishedAt.getTime()) / (1000 * 3600 * 24));
  // }
}
