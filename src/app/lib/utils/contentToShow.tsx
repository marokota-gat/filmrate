import { Genre, TvShow, Movie, All } from "@/app/types/types";
import { getGenresMovies, getGenresTvShows, getPopularMovies, getPopularTvShows } from "../api/tmdb";



export async function getMovies(page: number) {
    const movie = await getPopularMovies(page);
    const genres = await getGenresMovies();
    const movies: Movie[] = getMovieWithGenres(movie, genres);
    return movies;
}

export async function getSeries(page: number) {
    const serie = await getPopularTvShows(page);
    const genres = await getGenresTvShows();
    const series: TvShow[] = getTvWithGenres(serie, genres);
    return series;
}

export async function getAll(page: number) {
    const movies = await getMovies(page);
    const series = await getSeries(page);
    const content: All[] = getMixedAll(movies, series);
    return content;
}

export function getMovieWithGenres(movies: Movie[], genres: Genre[]) {
    return movies.map((movie: Movie) => ({
        ...movie,
        genre_names: movie.genre_ids
            .slice(0, 3)
            .map((id: number) => genres.find((g: Genre) => g.id === id)?.name || '')
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

export async function getContent(selector: string, page: number) {
    var content: any = null;

    switch (selector) {
        case 'film':
            content = await getMovies(page);
            break;
        case 'serie':
            content = await getSeries(page);
            break;
        default:
            content = await getAll(page);
            break;
    }
    return content;
}

function getMixedAll(movies: any, series: any) {
    const all: All[] = [...movies, ...series];
    // mescola l'array all, a sua volta all e' l'unione di series e movies 
    for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
    }

    return all;
}




// class ContentToShow {
//     private movies: Movie[];
//     private series: TvShow[];
//     private all: All[];
//     private page: number;

//     constructor(page: number) {
//         this.movies = [];
//         this.series = [];
//         this.all = [];
//         this.page = page;
//     }

//     async getMovies() {
//         const movie = await getPopularMovies(this.page);
//         const genres = await getGenresMovies();
//         this.movies = getMovieWithGenres(movie, genres);
//         return this.movies;
//     }

//     async getSeries() {
//         const serie = await getPopularTvShows(1);
//         const genres = await getGenresTvShows();
//         const series: TvShow[] = getTvWithGenres(serie, genres);
//         return series;
//     }

//     async getAll() {
//         const movies = await this.getMovies();
//         const series = await this.getSeries();
//         const content: All[] = getMixedAll(movies, series);
//         return content;
//     }

//     getMovieWithGenres(movies: Movie[], genres: Genre[]) {
//         return movies.map((movie: Movie) => ({
//             ...movie,
//             genre_names: movie.genre_ids
//                 .slice(0, 3)
//                 .map((id: any) => genres.find((g: Genre) => g.id === id)?.name || '')
//                 .filter(Boolean),
//         }));
//     }

//     getTvWithGenres(series: TvShow[], genres: Genre[]) {
//         return series.map((tvShow: TvShow) => ({
//             ...tvShow,
//             genre_names: tvShow.genre_ids
//                 .slice(0, 3)
//                 .map((id: number) => genres.find((g: Genre) => g.id === id)?.name || '')
//                 .filter(Boolean),
//         }));
//     }

//     getMixedAll(movies: any, series: any) {
//         const all: All[] = [...movies, ...series];
//         // mescola l'array all, a sua volta all e' l'unione di series e movies 
//         for (let i = all.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [all[i], all[j]] = [all[j], all[i]];
//         }
//         return all;
//     }
// }

