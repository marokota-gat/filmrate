import { Movie, TvShow, Genre } from "@/app/types/types";

const API_READ_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
  },
};

export async function getPopularMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?language=it-IT&page=${page}`,
    options
  );
  if (!res.ok) {
    throw new Error('Errore fetch TMDB');
  }
  const data = await res.json();
  return data.results; // array di film
}
// Show image on contentcard
export function getPosterUrl(
  path: string | null,
  size: string = 'w500'
): string {
  if (!path) return '/PosterPlaceholder.png';
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

export async function getGenresMovies() {
  const res = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?language=it',
    options
  );
  const data = await res.json();
  return data.genres;
}

export async function getPopularTvShows(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?language=it-IT&page=${page}`,
    options
  );
  const data = await res.json();
  return data.results;
}
export async function getGenresTvShows() {
  const res = await fetch(
    'https://api.themoviedb.org/3/genre/tv/list',
    options
  );
  const data = await res.json();
  return data.genres;
}

