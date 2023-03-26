import { Pipe, PipeTransform } from '@angular/core';
import { YoutubeItem } from 'src/app/shared/models/youtube-item.model';

@Pipe({
  name: 'searchByString'
})
export class SearchByStringPipe implements PipeTransform {

  transform(searchResults: YoutubeItem[], inputValue: string): YoutubeItem[] {
    return searchResults.filter(
      ({snippet: { title }}) =>
        title.toLowerCase().includes(inputValue.toLowerCase())
    );
  }
}
