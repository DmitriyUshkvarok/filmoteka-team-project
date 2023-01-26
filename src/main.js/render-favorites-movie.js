import { ApiTheMovie } from './fetch-class';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import movieWatches from '../templates/card-movie-watched.hbs';
import movieQueue from '../templates/card-movie-queue.hbs'
import { Notify } from 'notiflix';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
export const gallery = document.querySelector('.gallery');
import { QUEUE_KEY } from './queue-library';
const apiTheMovies = new ApiTheMovie();


//== WATCHED LIBRARRY
const WATCHED_KEY = 'watched-key';
const watchLibBtn = document.querySelector('.watched');
watchLibBtn.addEventListener('click', onOpenWatchLibrary);

// получение списка фильмов из локального хранилища для библиотеки и проверка на пустую библиотеку
function getWatchesList() {
  const data = JSON.parse(localStorage.getItem(WATCHED_KEY));
  console.log(data);
  if (!data) {
    return;
  }
  return data;
}

function onOpenWatchLibrary(e) {
  e.preventDefault();
  let data = getWatchesList();
  console.log(data);
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


//==QUEUE LIBRARRY
const queueLibrBtn = document.querySelector('.queue');
queueLibrBtn.addEventListener('click', onOpenQueueLibrary);
// получение списка фильмов из локального хранилища для библиотеки и проверка на пустую библиотеку
function getQueueList() {
  const data = JSON.parse(localStorage.getItem(QUEUE_KEY));
  console.log(data);
  if (!data) {
    return;
  }
  return data;
};

function onOpenQueueLibrary(e) {
  e.preventDefault();
  let data = getQueueList();
  console.log(data);
  const markup = data
    .map(el => {
      return movieQueue(el);
    })
    .join('');

  gallery.innerHTML = markup;

  if (!markup) {
    // gallery.innerHTML = noFilmsInLibrarry();
  }
}