import default_image from '@/assets/default_image.jpg';

class Movie {
    constructor(movie = {}) {
        this.id = movie.id;
        this.original_language = movie.original_language;
        this.original_title = movie.original_title;
        this.adult = movie.adult;
        this.backdrop_path = movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : default_image;
        this.poster_path = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        this.genres = movie.genres;
        this.overview = movie.overview;
        this.popularity = movie.popularity;
        this.release_date = movie.release_date;
        this.release_year = movie.release_date.slice(0, 4);
        this.title = movie.title;
        this.video = movie.video;
        this.vote_average = movie.vote_average;
        this.vote_count = movie.vote_count;
    }
}
export default Movie;