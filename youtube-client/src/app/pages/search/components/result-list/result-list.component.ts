import { Component } from '@angular/core';
import { YoutubeItem } from 'src/app/shared/models/youtube-item.model';
import { _mockedData } from './_mockedData';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  resultList: YoutubeItem[] = _mockedData;

}
