import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface RequestParams {
  [key: string]: {
    baseUrl: string;
    part: string;
    type?: string;
    maxResults?: string;
  }
}

export interface ReqCloneParams {
  headers?: HttpHeaders;
  url?: string;
  params?: HttpParams;
  setParams?: {
    key: string,
  };
}
