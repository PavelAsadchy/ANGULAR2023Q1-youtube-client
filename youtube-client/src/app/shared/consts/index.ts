import { RequestParams } from '../models/request-params.model';

export enum LocalStorageKeys {
  AUTH_TOKEN = 'youtube_client_auth_token',
}

export const DEFAULT_USER_NAME = 'Your Name';

export const YOUTUBE_REQUEST_PARAMS: RequestParams = {
  search: {
    baseUrl: 'https://www.googleapis.com/youtube/v3/search',
    part: 'snippet',
    type: 'video',
    maxResults: '50',
  },
  video: {
    baseUrl: 'https://www.googleapis.com/youtube/v3/videos',
    part: 'snippet,statistics',
  },
};

export enum YoutubeRequestHeaders {
  GET_DATA_BY_STRING = 'get_data_by_string',
  GET_DATA_BY_IDS = 'get_data_by_ids',
} 
