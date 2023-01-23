import allCollectionFunction from '../templates/all-collection-movies.hbs';
import { ApiTheMovie } from './fetch-class';
import Notiflix from 'notiflix';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const apiTheMovies = new ApiTheMovie();
const gallery = document.querySelector('.gallery');

function onLoadAllMovies() {
  apiTheMovies.fetchAllFilms(apiTheMovies.page).then(renderMarkupAllMovieCard);
}
onLoadAllMovies();

function renderMarkupAllMovieCard(responseAll) {
  const resultAll = allCollectionFunction(responseAll);
  gallery.insertAdjacentHTML('beforeend', resultAll);
  if (responseAll.results.length === 0) {
    Notiflix.Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }
}
