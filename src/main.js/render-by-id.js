import { ApiTheMovie } from './fetch-class';
import modalFunction from '../templates/modal-movies.hbs';
import * as basicLightBox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {
  getWatchedList,
  renderMoviesinWatchedLibrary,
  setMovieToLocalStorage,
} from './watched-library-temp';
import { getQueueList, renderMoviesinQueueLibrary } from './queue-library';

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
  console.log(data);
  const markUp = modalFunction(data);
  const instance = basicLightBox.create(markUp);
  instance.show();
  document.body.classList.add('stop-fon');
  //==  міняємо ADD TO WATCHED на REMOVE FROM WATCHED
  let watchedList = getWatchedList();
  const modalWathcedLibrarryBtn = document.querySelector('.modal-btn__watched');
  const modalQueueLibrarryBtn = document.querySelector('.modal-btn__queue');
  if (!watchedList.find(film => film.id === data.id)) {
    modalWathcedLibrarryBtn.textContent = 'Add to watched';
    modalQueueLibrarryBtn.textContent = 'Add to Queue';
  } else {
    modalWathcedLibrarryBtn.textContent = 'Remove from watched';
    modalQueueLibrarryBtn.textContent = 'Remove from Queue';
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
  modalWathcedLibrarryBtn.addEventListener(
    'click',
    renderMoviesinWatchedLibrary
  );
  modalQueueLibrarryBtn.addEventListener('click', renderMoviesinQueueLibrary);
}
