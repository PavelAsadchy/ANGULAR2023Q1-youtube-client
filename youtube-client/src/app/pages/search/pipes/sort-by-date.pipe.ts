import { Pipe, PipeTransform } from '@angular/core';
import { YoutubeItem } from 'src/app/shared/models/youtube-item.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(
    searchResults: YoutubeItem[],
    isModeEnabled: boolean,
    isSortDirectionIncreasing: boolean,
  ): YoutubeItem[] {
    if (isModeEnabled) {
      const sorted = [...searchResults].sort((a: YoutubeItem, b: YoutubeItem): number => {
        const start: any = new Date(a.snippet.publishedAt);
        const end: any = new Date(b.snippet.publishedAt);
        
        return isSortDirectionIncreasing ? (start - end) : (end - start);
      });
      
      return sorted;
    } else {
      return searchResults;
    }
  }
}
