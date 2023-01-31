import allCollectionFunction from '../templates/all-collection-movies.hbs';
import { apiTheMovies } from './render-all-collection';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Notiflix from 'notiflix';
import { makeValidatesGenreName } from './validate-movie-data';
import { makeShortReleaseDate } from './validate-movie-data';
import { preloaderSetTimeOut } from './preloader';

const form = document.querySelector('.header-form');
const warning = document.querySelector('.js-search');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.header-input');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  preloaderSetTimeOut();
  apiTheMovies.searchValue = input.value.trim();

  if (!apiTheMovies.searchValue) {
    Notiflix.Notify.info('Enter the name movie');
    warning.style.color = '#FF001B';
    warning.style.textAlign = 'center';
    warning.style.marginBottom = '10px';
    warning.removeAttribute('hidden');
    setTimeout(() => {
      warning.setAttribute('hidden', '');
    }, 3000);
    return;
  }
  apiTheMovies.resetPage();
  apiTheMovies
    .fetchBySearch(apiTheMovies.searchValue)
    .then(makeValidatesGenreName)
    .then(makeShortReleaseDate)
    .then(showMovie);
  form.elements.searchQuery.value = '';
}

function showMovie(resultSearch) {
  if (resultSearch.total_results == 0) {
    warning.style.color = '#FF001B';
    warning.style.textAlign = 'center';
    warning.style.marginBottom = '10px';
    warning.removeAttribute('hidden');
    setTimeout(() => {
      warning.setAttribute('hidden', '');
    }, 3000);
    return;
  }
  const markupSearch = allCollectionFunction(resultSearch);
  gallery.innerHTML = markupSearch;
}
