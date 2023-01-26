import axios from 'axios';
import { Notify } from 'notiflix';

export class ApiTheMovie {
  URL = `https://api.themoviedb.org/3`;
  key = 'f27eea818d2010463700365b0c06a16e';

  constructor() {
    this.page = 1;
    this.genreId = null;
    this.movieId = null;
    this.currentId = null;
    this.searchValue = null;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  setMovieId(movieId) {
    this.movieId = movieId;
  }

  // список всех популярных фильмов
  fetchAllFilms() {
    return axios
      .get(`${this.URL}/discover/movie?api_key=${this.key}&page=${this.page}`)
      .then(response => response.data)
      .catch(this.onError);
  }

  // фильмы по клику id
  fetchById() {
    return axios
      .get(`${this.URL}/movie/${this.movieId}?api_key=${this.key}&`)
      .then(response => response.data)
      .catch(this.onError);
  }

  // список в поиске по названию
  fetchBySearch() {
    return axios
      .get(
        `${this.URL}/search/movie?api_key=${this.key}&query=${this.searchValue}&page=${this.page}`
      )
      .then(response => response.data)
      .catch(this.onError);
  }

  // выбор по жанру
  fetchByGenre() {
    return axios
      .get(
        `${this.URL}/discover/movie?api_key=${this.key}&with_genres=${this.genreId}&page=${this.page}`
      )
      .then(response => response.data)
      .catch(this.onError);
  }

  // запрос на просмотр трейлера
  fetchTrailerMovies() {
    return axios
      .get(`${this.URL}/movie/${this.movieId}/videos?api_key=${this.key}`)
      .then(response => response.data)
      .catch(this.onError);
  }

  // список жанров
  fetchAllgenres() {
    return axios.get(`${this.URL}/genre/movie/list?api_key=${this.key}`);
  }

  onError() {
    return Notify.failure('sorry this is error');
  }
}
