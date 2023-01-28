import movieWatches from '../templates/card-movie-watched.hbs';
import movieQueue from '../templates/card-movie-queue.hbs';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { QUEUE_KEY } from './queue-library';
import { watchedModalOpenOnCardClick } from './modal-watched-library';
export const gallery = document.querySelector('.gallery');
//== WATCHED LIBRARRY
const WATCHED_KEY = 'watched-key';
const watchLibBtn = document.querySelector('.watched');
watchLibBtn.addEventListener('click', onOpenWatchLibrary);
const showMeModal = document.querySelector('.gallery');
//== відкриття модалки в бібліотеці Watched
showMeModal.addEventListener('click', watchedModalOpenOnCardClick);

// получение списка фильмов из локального хранилища для библиотеки и проверка на пустую библиотеку
export function getWatchesList() {
  const data = JSON.parse(localStorage.getItem(WATCHED_KEY));
  if (!data) {
    return;
  }
  return data;
}

export function onOpenWatchLibrary() {
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
}

export function onOpenQueueLibrary(e) {
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
