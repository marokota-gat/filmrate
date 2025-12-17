import { Genre, TvShow, Movie, All } from "@/app/types/content";
import { getGenresMovies, getGenresTvShows, getPopularMovies, getPopularTvShows } from "../api/tmdb";

export async function getMovies() {
    const movie = await getPopularMovies(1);
    const genres = await getGenresMovies();
    const movies: Movie[] = getMovieWithGenres(movie, genres);
    return movies;
}

export async function getSeries() {
    const serie = await getPopularTvShows(1);
    const genres = await getGenresTvShows();
    const series: TvShow[] = getTvWithGenres(serie, genres);
    return series;
}

export async function getAll() {
    const movies = await getMovies();
    const series = await getSeries();
    const content: All[] = getMixedAll(movies, series);
    return content;
}

export function getMovieWithGenres(movies: Movie[], genres: Genre[]) {
    return movies.map((movie: Movie) => ({
        ...movie,
        genre_names: movie.genre_ids
            .slice(0, 3)
            .map((id: any) => genres.find((g: Genre) => g.id === id)?.name || '')
            .filter(Boolean),
    }));
}

export function getTvWithGenres(series: TvShow[], genres: Genre[]) {
    return series.map((tvShow: TvShow) => ({
        ...tvShow,
        genre_names: tvShow.genre_ids
            .slice(0, 3)
            .map((id: number) => genres.find((g: Genre) => g.id === id)?.name || '')
            .filter(Boolean),
    }));
}

export function getMixedAll(movies: any, series: any) {
    const all: All[] = [...movies, ...series];
    // mescola l'array all, a sua volta all e' l'unione di series e movies 
    for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
    }

    return all;
}
