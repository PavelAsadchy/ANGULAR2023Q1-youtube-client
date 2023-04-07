import { Injectable } from '@angular/core';
import { YoutubeItem } from '../models/youtube-item.model';

@Injectable({
  providedIn: 'root',
})
export class SelectedItemService {

  selected: YoutubeItem | null = null;

  initSlected(item: YoutubeItem): void {
    this.selected = item;
  }

  clearSelected(): void {
    this.selected = null;
  }
}
