export interface SearchMoviesResp {
  Search: MovieSearchDetails[],
  totalResults: string,
  Response: string
}

export interface MovieSearchDetails {
  Title: string,
  Year: string,
  imdbID: string,
  Type: MovieType,
  Poster
}

export type MovieType = 'movie' | 'series' | 'episode';

export interface MovieDetails {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: Rating[],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: MovieType,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: string,
}

export type Rating = { Source: string, Value: string}
