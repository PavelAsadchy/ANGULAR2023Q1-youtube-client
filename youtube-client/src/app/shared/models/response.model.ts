import { PageInfo } from './page-info.model';
import { YoutubeItem } from './youtube-item.model';

export interface Response {
  kind: string;
  etag: string;
  pageinfo: PageInfo;
  items: YoutubeItem[];
  nextPageToken: string;
  regionCode: string;
}
