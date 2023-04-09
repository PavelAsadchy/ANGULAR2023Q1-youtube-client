interface YoutubeItemSnippetThumbnail {
  url: string;
  width: number;
  height: number;
}

interface YoutubeItemSnippetThumbnails {
  default: YoutubeItemSnippetThumbnail,
  medium?: YoutubeItemSnippetThumbnail,
  high?: YoutubeItemSnippetThumbnail,
  standard?: YoutubeItemSnippetThumbnail,
  maxres?: YoutubeItemSnippetThumbnail
}

interface YoutubeItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeItemSnippetThumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized?: {
    title: string,
    description: string
  };
  defaultAudioLanguage: string;
}

export interface YoutubeItemStatistics {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}

export interface YoutubeSearchResult {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: YoutubeItemSnippet;
}

export interface YoutubeItem {
  kind: string;
  etag: string;
  id: string;
  snippet: YoutubeItemSnippet;
  statistics: YoutubeItemStatistics;
}
