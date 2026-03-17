export interface Episode {
  headers: Headers;
  intro?: Segment;
  outro?: Segment;
  sources: VideoSource[];
  subtitles?: Subtitles[];
  download?: DownloadSource[];
}

export interface Headers {
  Referer: string;
}

export interface Segment {
  start: number;
  end: number;
}

export interface VideoSource {
  url: string;
  isM3U8: boolean;
  type?: string;
  quality?: string;
  isDub?: boolean;
}

export interface DownloadSource {
  url: string;
  quality: string;
}

export interface Subtitles {
  url: string;
  lang: string;
}

export interface Page {
  page: number;
  img: string;
  headerForImage?: Headers;
}
