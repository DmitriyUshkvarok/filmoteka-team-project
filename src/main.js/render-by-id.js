import { ApiTheMovie } from './fetch-class';
import modalFunction from '../templates/modal-movies.hbs';
import * as basicLightBox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { renderMoviesinWatchedLibrary } from './watched-library-temp';
import { renderMoviesinQueueLibrary } from './queue-library';
import { getQueueList } from './queue-library';
import { searchTrailer, instanceTrailer } from './play-movie';
import { makeShortVoteAndPopularity } from './validate-movie-data';
import { preloaderSetTimeOut } from './preloader';

const apiTheMovies = new ApiTheMovie();
const gallery = document.querySelector('.gallery');
const WATCHED_KEY = 'watched-key';

function getWatchedList() {
  const data = JSON.parse(localStorage.getItem(WATCHED_KEY));
  if (!data) {
    return;
  }
  return data;
}

gallery.addEventListener('click', onCardClick);

function onCardClick(event) {
  preloaderSetTimeOut();
  if (event.target === event.currentTarget) {
    return;
  }
  const currentId = event.target.closest('.movie-card__item').dataset.id;
  apiTheMovies.setMovieId(currentId);
  apiTheMovies.fetchById(currentId).then(onOpenCard);
}

function onOpenCard(data) {
  makeShortVoteAndPopularity(data);
  const markUp = modalFunction(data);
  const instance = basicLightBox.create(markUp);
  instance.show();
  document.body.classList.add('stop-fon');

  //== якщо цього фільма немає - напис добавити, якщо є - видалити (СУТО текст)
  let watchedList = getWatchedList();
  const modalWathcedLibraryBtn = document.querySelector('.modal-btn__watched');
  if (!watchedList.find(film => film.id === data.id)) {
    modalWathcedLibraryBtn.textContent = 'Add to watched';
  } else {
    modalWathcedLibraryBtn.textContent = 'Remove from watched';
  }

  //== якщо цього фільма немає - напис добавити, якщо є - видалити (СУТО текст)
  let queueList = getQueueList();
  const modalQueueLibraryBtn = document.querySelector('.modal-btn__queue');
  if (!queueList.find(film => film.id === data.id)) {
    modalQueueLibraryBtn.textContent = 'Add to Queue';
  } else {
    modalQueueLibraryBtn.textContent = 'Remove from Queue';
  }

  //== закриття бекдропа ESC
  window.addEventListener('keydown', onKeydownEsc);
  function onKeydownEsc(event) {
    if (event.code === 'Escape' && !instanceTrailer.visible()) {
      preloaderSetTimeOut();
      instance.close();
      document.body.classList.remove('stop-fon');
    }
  }

  //  закрытие модального окна по клику бекдропа
  const basic = document.querySelector('.basicLightbox');
  basic.addEventListener('click', onOffHidden);

  function onOffHidden() {
    preloaderSetTimeOut();
    document.body.classList.remove('stop-fon');
  }

  //== закриття модалки при клікі на клавішу
  const modalBtnClose = document.querySelector('.modal-btn__close');
  modalBtnClose.addEventListener('click', onModalBtnClose);
  function onModalBtnClose() {
    preloaderSetTimeOut();
    instance.close();
    document.body.classList.remove('stop-fon');
  }

  //== добавити карточку в WATCHED
  modalWathcedLibraryBtn.addEventListener(
    'click',
    renderMoviesinWatchedLibrary
  );
  modalQueueLibraryBtn.addEventListener('click', renderMoviesinQueueLibrary);
  // найти и запустить трейлер фильма
  searchTrailer();
}
