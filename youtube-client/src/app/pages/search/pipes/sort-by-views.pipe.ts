import { Pipe, PipeTransform } from '@angular/core';
import { YoutubeItem } from '../../../shared/models/youtube-item.model';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {

  transform(
    searchResults: YoutubeItem[],
    isModeEnabled: boolean,
    isSortDirectionIncreasing: boolean,
  ): YoutubeItem[] {
    if (isModeEnabled) {
      const sorted = [...searchResults].sort((a: YoutubeItem, b: YoutubeItem): number =>
        isSortDirectionIncreasing
          ? +a.statistics.viewCount - +b.statistics.viewCount
          : +b.statistics.viewCount - +a.statistics.viewCount,
      );

      return sorted;
    } else {
      return searchResults;
    }
  }
}
