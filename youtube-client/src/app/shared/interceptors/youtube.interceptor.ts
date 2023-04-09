import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { YOUTUBE_REQUEST_PARAMS, YoutubeRequestHeaders } from '../consts';
import { ReqCloneParams } from '../models/request-params.model';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.generateRequest(request);

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // handle request errors
          return throwError(() => new Error(error.message));
        })
      );
  }

  private generateRequest(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const searchRequest = request.url;
    const reqCloneParams: ReqCloneParams = {
      setParams: { key: environment.api_key },
      headers: new HttpHeaders(),
    };

    if (request.headers.has(YoutubeRequestHeaders.GET_DATA_BY_STRING)) {
      reqCloneParams['url'] = YOUTUBE_REQUEST_PARAMS['search'].baseUrl;
      reqCloneParams['params'] =
        (request.params ? request.params : new HttpParams())
          .set('part', YOUTUBE_REQUEST_PARAMS['search'].part)
          .set('type', YOUTUBE_REQUEST_PARAMS['search'].type!)
          .set('maxResults', YOUTUBE_REQUEST_PARAMS['search'].maxResults!)
          .set('q', searchRequest);
    } else if (request.headers.has(YoutubeRequestHeaders.GET_DATA_BY_IDS)) {
      reqCloneParams['url'] = YOUTUBE_REQUEST_PARAMS['video'].baseUrl;
      reqCloneParams['params'] =
        (request.params ? request.params : new HttpParams())
          .set('part', YOUTUBE_REQUEST_PARAMS['video'].part)
          .set('id', searchRequest);
    }

    return request.clone(reqCloneParams);
  }
}
