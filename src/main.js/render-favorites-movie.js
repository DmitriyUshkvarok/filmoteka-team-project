import { ApiTheMovie } from './fetch-class';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import movieWatches from '../templates/card-movie-watched.hbs';
import { Notify } from 'notiflix';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
export const gallery = document.querySelector('.gallery');
const WATCHED_KEY = 'watched-key';
const apiTheMovies = new ApiTheMovie();
const watchLibBtn = document.querySelector('.watched');
watchLibBtn.addEventListener('click', onOpenWatchLibrary);

// получение списка фильмов из локального хранилища для библиотеки и проверка на пустую библиотеку
function getWatchesList() {
  const data = JSON.parse(localStorage.getItem(WATCHED_KEY));
  if (!data) {
    return;
  }
  return data;
}

function onOpenWatchLibrary(e) {
  e.preventDefault();
  let data = getWatchesList();
  const markup = data
    .map(el => {
      return movieWatches(el);
    })
    .join('');

  gallery.innerHTML = markup;

  if (!markup) {
    // gallery.innerHTML = noFilmsInLibrarry();
  }
}
