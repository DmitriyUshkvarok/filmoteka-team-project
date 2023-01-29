import allCollectionFunction from '../templates/all-collection-movies.hbs';
import { apiTheMovies } from './render-all-collection';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Notiflix from 'notiflix';

const form = document.querySelector('.header-form');
const warning = document.querySelector('.js-search');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  apiTheMovies.searchValue = e.currentTarget.elements.searchQuery.value.trim();

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
  apiTheMovies.fetchBySearch(apiTheMovies.searchValue).then(showMovie);
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
