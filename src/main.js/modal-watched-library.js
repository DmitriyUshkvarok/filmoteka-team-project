import { ApiTheMovie } from './fetch-class';
import * as basicLightBox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Notify } from 'notiflix';
import { WATCHED_KEY } from './render-favorites-movie';
import modalWatchedMarkup from '../templates/modal-watched-library.hbs';
import movieWatches from '../templates/card-movie-watched.hbs';
import { getWatchedList } from './watched-library-temp';
import { getWatchesList } from './render-favorites-movie';
import { gallery } from './render-favorites-movie';
const apiTheMovies = new ApiTheMovie();
import { onOpenWatchLibrary } from './render-favorites-movie';

function getWatchesList() {
  const data = JSON.parse(localStorage.getItem(WATCH_KEY));
  if (!data) {
    gallery.innerHTML = noFilmsInLibrarry();
    return;
  }
  return data;
}

//== реалізація відкриття модалки по кліку на картку
export async function watchedModalOpenOnCardClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  const currentId = event.target.closest('.movie-card__item').dataset.id;
  apiTheMovies.setMovieId(currentId);
  apiTheMovies.fetchById(currentId).then(onOpenCard);
}
//== відкриття модалки
function onOpenCard(respModal) {
  const markUp = modalWatchedMarkup(respModal);
  const instance = basicLightBox.create(markUp);
  instance.show();
  document.body.classList.add('stop-fon');

  //== видалення з бібліотеки по клавіші а також з локального
  const modalWatchedLibrBtn = document.querySelector('.modal-btn__watched');
  modalWatchedLibrBtn.textContent = 'remove from watched';
  modalWatchedLibrBtn.addEventListener('click', callback);
  function callback(e) {
    let data = getWatchedList();
    const currentIdBtnWatch = e.target.dataset.id;
    if (data.find(film => film.id === Number(currentIdBtnWatch))) {
      let data = getWatchedList();
      data = data.filter(film => film.id !== Number(currentIdBtnWatch));
      localStorage.setItem(WATCHED_KEY, JSON.stringify(data));
      Notify.warning('Фильм Удалён из библиотеки');
      instance.close();
    }
    renderMarkupListMovies();

    //== знову рендер після видалення з бібліотеки
    // function renderMarkupListMovies() {
    //   let data = getWatchesList();
    //   const markup = data
    //     .map(el => {
    //       return movieWatches(el);
    //     })
    //     .join('');

    //   gallery.innerHTML = markup;

    //   if (!markup) {
    //     gallery.innerHTML = noFilmsInLibrarry();
    //   }
    // }

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
    const watchLibBtn = document.querySelector('.watched');
    watchLibBtn.addEventListener('click', onOpenWatchLibrary);
  }
}
