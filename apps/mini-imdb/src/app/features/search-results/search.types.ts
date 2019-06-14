export interface ISearchParams {
  apikey?: string;
  page?: number;
  i?: string; // as imdb id
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
  Type: 'movie' | 'series' | 'episode' | 'game';
}

export interface IMovieByIdSingleResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: ISingleReview[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface ISingleReview {
  Source: string;
  Value: string;
}
