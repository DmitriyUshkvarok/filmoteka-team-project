import allCollectionFunction from '../templates/all-collection-movies.hbs';
import { ApiTheMovie } from './fetch-class';
import Notiflix from 'notiflix';
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

let genres;

// Make short date, like 2020

export function makeValidatesReleaseDate(data) {
  return data.slice(0, 4);
};

export function makeShortReleaseDate (object) {
  object.results.forEach(movie => {
    movie.release_date = movie.release_date
      ? makeValidatesReleaseDate(movie.release_date)
      : '';
  });
  return object;
};

// Validating genre names

const saveGenres = genres => {
  let genresList = [...genres];

  localStorage.setItem('genres', JSON.stringify(genresList));
};

const makeGenresList = () => {
  apiTheMovies.fetchAllgenres().then(saveGenres);
};
makeGenresList();

export function makeValidatesGenreName (response) {
  genres = JSON.parse(localStorage.getItem('genres'));
  if (!genres) {
    return;
  }

  response.results.forEach(movieEl => {
    if (movieEl.genre_ids) {
      movieEl.genre_ids.forEach((idGenre, indexGenre) => {
        genres.forEach(objectNames => {
          if (objectNames.id === idGenre) {
            movieEl.genre_ids.splice(indexGenre, 1, objectNames['name']);
          }
        });
      });
    } else {
      movieEl.genre_ids = '';
    }
  });

  return response;
};

// Creating Markup

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

// Infinity scroll

export function onInfinityMoviesLoad(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      apiTheMovies.incrementPage();
      if (apiTheMovies.genreId) {
        apiTheMovies.fetchByGenre(this.genreId).then(renderMarkupAllMovieCard);
      } else if (apiTheMovies.searchValue) {
        apiTheMovies
          .fetchBySearch(apiTheMovies.searchValue)
          .then(renderMarkupAllMovieCard);
      } else {
        apiTheMovies
          .fetchAllFilms()
          .then(makeValidatesGenreName)
          .then(renderMarkupAllMovieCard);
      }
    }
  });
}
