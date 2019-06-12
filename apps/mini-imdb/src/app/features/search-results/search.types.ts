export interface ISearchParams {
  apikey?: string;
  page?: number;
  t?: string; // as title
  s?: string; // as search query
  y?: number; // as year
}

export interface IMovieSearchResult {
  Search: IMovieSearchSingleResult[];
  TotalResults: string;
  Response: string;
}

export interface IMovieSearchSingleResult {
  Title: string;
  Poster: string;
  imdbID: string;
  Year: string;
  Type: 'movie' | 'series' | 'episode';
}
