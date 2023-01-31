import allCollectionFunction from '../templates/all-collection-movies.hbs';
import { ApiTheMovie } from './fetch-class';
import Notiflix from 'notiflix';
import { makeGenresList } from './validate-movie-data';
import { makeValidatesGenreName } from './validate-movie-data';
import { makeShortReleaseDate } from './validate-movie-data';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Intersection Observer

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(onInfinityMoviesLoad, options);

export const apiTheMovies = new ApiTheMovie();
const gallery = document.querySelector('.gallery');
const guard = document.querySelector('.js-guard');

function renderMarkupAllMovieCard(responseAll) {
  const markup = allCollectionFunction(responseAll);
  gallery.insertAdjacentHTML('beforeend', markup);
  if (!markup) {
    Notiflix.Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }
}

// Rendering movies

function onLoadAllMovies() {
  apiTheMovies
    .fetchAllFilms(apiTheMovies.page)
    .then(makeValidatesGenreName)
    .then(makeShortReleaseDate)
    .then(renderMarkupAllMovieCard);
  observer.observe(guard);
}
onLoadAllMovies();
makeGenresList();

// Infinity scroll

export function onInfinityMoviesLoad(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      apiTheMovies.incrementPage();
      if (apiTheMovies.genreId) {
        apiTheMovies
          .fetchByGenre(this.genreId)
          .then(makeValidatesGenreName)
          .then(makeShortReleaseDate)
          .then(renderMarkupAllMovieCard);
      } else if (apiTheMovies.searchValue) {
        apiTheMovies
          .fetchBySearch(apiTheMovies.searchValue)
          .then(makeValidatesGenreName)
          .then(makeShortReleaseDate)
          .then(renderMarkupAllMovieCard);
      } else {
        apiTheMovies
          .fetchAllFilms()
          .then(makeValidatesGenreName)
          .then(makeShortReleaseDate)
          .then(renderMarkupAllMovieCard);
      }
    }
  });
}
