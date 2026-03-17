export interface BaseTitle {
  id: string;
  malId: string;
  title: TitleName;
  status: string;
  image: string;
  imageHash: string;
  cover: string;
  coverHash: string;
  rating: number;
  type: string;
}

export interface Title extends BaseTitle {
  synonyms: string[];
  isLicensed: boolean;
  isAdult: boolean;
  countryOfOrigin: string;
  trailer: Trailer;
  popularity: number;
  color: string;
  description: string;
  releaseDate: number;
  startDate: TitleDate;
  endDate: TitleDate;
  totalEpisodes: number;
  currentEpisode: number;
  duration: number;
  genres: string[];
  season: string;
  studios: string[];
  subOrDub: string;
  recommendations: Recommendation[];
  characters: Character[];
  relations: Relation[];
  episodes: TitleEpisode[];
}

export interface MangaTitle extends BaseTitle {
  popularity: number;
  color: string;
  description: string;
  releaseDate: number;
  startDate: TitleDate;
  endDate: TitleDate;
  genres: string[];
  season: string;
  studios: string[];
  recommendations: Recommendation[];
  characters: Character[];
  relations: Relation[];
  chapters: TitleChapter[];
}

export interface TitleName {
  romaji: string;
  english: string;
  native: string;
  userPreferred?: string;
}

export interface Trailer {
  id: string;
  site: string;
  thumbnail: string;
  thumbnailHash: string;
}

export interface TitleDate {
  year: number;
  month: number;
  day: number;
}

export interface Recommendation extends BaseTitle {
  episodes: string;
}

export interface Person {
  id: string;
  name: Name;
  image: string;
  imageHash: string;
}

export interface Character extends Person {
  role: string;
  voiceActors: VoiceActor[];
}

export interface Name {
  first: string;
  last: string;
  full: string;
  native: string;
  userPreferred: string;
}

export interface VoiceActor extends Person {
  language: string;
}

export interface Relation extends Recommendation {
  relationType: string;
  color: string;
}

export interface TitleEpisode {
  id: string;
  title: string;
  image: string;
  imageHash: string;
  number: number;
  createdAt: string;
  description: string;
  url: string;
}

export interface TitleChapter {
  id: string;
  title: string;
  chapterNumber?: string;
  volumeNumber?: string;
  pages?: number;
  releasedDate?: string;
}
