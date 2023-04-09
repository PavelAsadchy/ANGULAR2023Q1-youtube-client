import { PageInfo } from './page-info.model';
import { YoutubeItem, YoutubeSearchResult } from './youtube-item.model';

export class YoutubeResponse {

  constructor(
    public kind: string,
    public etag: string,
    public pageInfo: PageInfo,
    public items: YoutubeItem[],
    public nextPageToken: string,
    public regionCode: string,
  ) { }

  static fromJSON(json: any): YoutubeResponse | [] {
    return Boolean(json)
      ? new YoutubeResponse(
          json.kind,
          json.etag,
          json.pageInfo,
          json.items,
          json.nextPageToken,
          json.regionCode,
        )
      : [];
  }

  static getIdsFromResponse(response: any): string {
    const idArr: string[] = [];
    response.items.forEach((item: YoutubeSearchResult) => idArr.push(item.id.videoId));

    return idArr.join(',');
  }
}

export class YoutubeResponseById {

  constructor(
    public kind: string,
    public etag: string,
    public pageInfo: PageInfo,
    public items: YoutubeItem[]
  ) {}

  static fromJSON(json: any): YoutubeResponseById | [] {
    return Boolean(json)
      ? new YoutubeResponseById(
        json.kind,
        json.etag,
        json.pageInfo,
        json.items)
      : [];
  }
}
