import { ApiTheMovie } from './fetch-class';
import * as basicLightBox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Notify } from 'notiflix';
import modalQueueMarkup from '../templates/modal-queue-library.hbs';
import { getQueueList } from '../main.js/queue-library';
import { onOpenQueueLibrary } from './render-favorites-movie';
const apiTheMovies = new ApiTheMovie();
const QUEUE_KEY = 'queue-key';
// const showMeModal = document.querySelector('.gallery');
// showMeModal.addEventListener('click', watchedModalOpenOnCardClickQ);

//== реалізація відкриття модалки по кліку на картку
export async function watchedModalOpenOnCardClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  const currentId = event.target.closest('.movie-card__item').dataset.id;
  apiTheMovies.setMovieId(currentId);
  apiTheMovies.fetchById(currentId).then(onOpenCardQ);
}
//== відкриття модалки
function onOpenCardQ(respModalQ) {
  const markUp = modalQueueMarkup(respModalQ);
  const instance = basicLightBox.create(markUp);
  instance.show();
  document.body.classList.add('stop-fon');

  //== видалення з бібліотеки по клавіші а також з локального
  const modalWatchedLibrBtnQ = document.querySelector('.modal-btn__queue');
  modalWatchedLibrBtnQ.textContent = 'remove from watched';
  modalWatchedLibrBtnQ.addEventListener('click', callback);
  function callback(e) {
    console.log(e);
    let data = getQueueList();
    const currentIdBtnWatch = e.target.dataset.id;
    if (data.find(film => film.id === Number(currentIdBtnWatch))) {
      let data = getQueueList();
      data = data.filter(film => film.id !== Number(currentIdBtnWatch));
      localStorage.setItem(QUEUE_KEY, JSON.stringify(data));
      Notify.warning('Фильм Удалён из библиотеки');
      instance.close();
    }
    onOpenQueueLibrary();

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
  }
}
