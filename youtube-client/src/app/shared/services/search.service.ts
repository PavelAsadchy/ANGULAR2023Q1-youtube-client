import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeResponse, YoutubeResponseById } from '../models/response.model';
import { YoutubeRequestHeaders } from '../consts';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { YoutubeItem } from '../models/youtube-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  resultListEnabled = false;

  serchResultList!: YoutubeItem[];

  getYoutubeData(searchRequest: string): Observable<YoutubeItem[]> {
    return this.getIdsBySearchRequest(searchRequest)
      .pipe(
        mergeMap((idForVideoRequest: string) =>
          this.httpClient.get<YoutubeResponseById>(idForVideoRequest, {
            headers: { [YoutubeRequestHeaders.GET_DATA_BY_IDS]: '' },
          })
            .pipe(
              map((json: any): YoutubeResponseById | [] => {
                return YoutubeResponseById.fromJSON(json);
              }),
              map((resp: any) => {
                return resp.items;
              }),
            ),
        ),
      );
  }
  
  private getIdsBySearchRequest(searchRequest: string): Observable<string> {
    return this.httpClient.get<YoutubeResponse>(searchRequest, {
      headers: { [YoutubeRequestHeaders.GET_DATA_BY_STRING]: '' },
    })
      .pipe(
        map((json: any): YoutubeResponse | [] => {
          return YoutubeResponse.fromJSON(json);
        }),
        map((resp: YoutubeResponse | []): string => {
          return YoutubeResponse.getIdsFromResponse(resp);
        }),
      );
  }
}
