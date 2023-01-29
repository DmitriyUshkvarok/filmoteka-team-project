import { ApiTheMovie } from './fetch-class';
import modalFunction from '../templates/modal-movies.hbs';
import * as basicLightBox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { renderMoviesinWatchedLibrary } from './watched-library-temp';
import { renderMoviesinQueueLibrary } from './queue-library';
import { getQueueList } from './queue-library';

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
  if (event.target === event.currentTarget) {
    return;
  }

  const currentId = event.target.closest('.movie-card__item').dataset.id;
  apiTheMovies.setMovieId(currentId);
  apiTheMovies.fetchById(currentId).then(onOpenCard);
}

function onOpenCard(data) {
  const movie = makeShortVoteAndPopularity(data);
  const markUp = modalFunction(movie);
  const instance = basicLightBox.create(markUp);
  instance.show();
  document.body.classList.add('stop-fon');
  //==  міняємо ADD TO WATCHED на REMOVE FROM WATCHED
  let watchedList = getWatchedList();
  const modalWathcedLibraryBtn = document.querySelector('.modal-btn__watched');
  if (!watchedList.find(film => film.id === data.id)) {
    modalWathcedLibraryBtn.textContent = 'Add to watched';
  } else {
    modalWathcedLibraryBtn.textContent = 'Remove from watched';
  }

  //== міняємо ADD TO QUEUE на REMOVE FROM QUEUE
  let queueList = getQueueList();
  console.log('this', queueList);
  const modalQueueLibraryBtn = document.querySelector('.modal-btn__queue');
  if (!queueList.find(film => film.id === data.id)) {
    modalQueueLibraryBtn.textContent = 'Add to Queue';
  } else {
    modalQueueLibraryBtn.textContent = 'Remove from Queue';
  }

  //== закриття бекдропа ESC
  window.addEventListener('keydown', onKeydownEsc);
  function onKeydownEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
      document.body.classList.remove('stop-fon');
    }
  }

  //  закрытие модального окна по клику бекдропа
  const basic = document.querySelector('.basicLightbox');
  basic.addEventListener('click', onOffHidden);

  function onOffHidden() {
    document.body.classList.remove('stop-fon');
  }

  //== добавити карточку в WATCHED
  modalWathcedLibraryBtn.addEventListener(
    'click',
    renderMoviesinWatchedLibrary
  );
  modalQueueLibraryBtn.addEventListener('click', renderMoviesinQueueLibrary);
}

// Обрізання значень рейтингу та популярності до 1 знаку після коми

function makeValidatesVoteAndPopularity(data) {
  return data.toFixed(1);
};

export function makeShortVoteAndPopularity(movie) {
  movie.vote_average = movie.vote_average ? makeValidatesVoteAndPopularity(movie.vote_average) : '';
  movie.popularity = movie.popularity ? makeValidatesVoteAndPopularity(movie.popularity) : '';
  return movie;
};