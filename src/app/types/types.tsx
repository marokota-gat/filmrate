export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  genre_names: string[];
  media_type: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface TvShow {
  id: number;
  name: string;
  first_air_date: string;
  poster_path: string;
  genre_ids: number[];
  genre_names: string[];
  media_type: string;
  vote_count: number;
  vote_average: number;
}

export interface All {
  //film
  id: number;
  title: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  genre_names: string[];
  media_type: string;

  // serie 
  name: string;
  first_air_date: string;
}

export interface User {
  avatarPath: string;
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  token: string;
}