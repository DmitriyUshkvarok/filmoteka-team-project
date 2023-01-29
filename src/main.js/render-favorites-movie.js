import { ApiTheMovie } from './fetch-class';
const apiTheMovies = new ApiTheMovie();
import movieWatches from '../templates/card-movie-watched.hbs';
import * as basicLightBox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import modalLibrarry from '../templates/modal-watched-library.hbs';
import modalLibrarryQue from '../templates/modal-queue-library.hbs';
import noFilmsInLibrary from '../templates/modal-no-films-library.hbs';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { Notify } from 'notiflix';
const WATCHED_KEY = 'watched-key';
const QUEUE_KEY = 'queue-key';
const watchLibBtn = document.querySelector('.watched');
const QueBtn = document.querySelector('.queue');
watchLibBtn.addEventListener('click', onOpenWatchLibrary);
QueBtn.addEventListener('click', onOpenQueueLibraty);
const gallery = document.querySelector('.gallery');
const galleryQue = document.querySelector('.gallery-Queue');
galleryQue.addEventListener('click', removeAndRenderQueue);
gallery.addEventListener('click', removeAndRenderWatched);

// получение списка фильмов из локального хранилища для библиотеки и проверка на пустую библиотеку
export function getWatchesList() {
  const data = JSON.parse(localStorage.getItem(WATCHED_KEY));
  if (!data) {
    return;
  }
  return data;
}

//== WATCHED Library, рендер сторінки
export function onOpenWatchLibrary() {
  let data = getWatchesList();
  const markup = data
    .map(el => {
      return movieWatches(el);
    })
    .join('');

  gallery.innerHTML = markup;
  galleryQue.innerHTML = '';

  if (!markup) {
    //== якщо немає фільмів - покажи розмітку
    gallery.innerHTML = noFilmsInLibrary();
  }
}

//== видалення при клікові на іконку на картці фільму WATCHED
async function removeAndRenderWatched(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const currentId = e.target.closest('.movie-card__item').dataset.id;
  apiTheMovies.setMovieId(currentId);

  if (e.target.id === 'close') {
    let data = getWatchesList();
    data = data.filter(film => film.id !== Number(currentId));
    localStorage.setItem(WATCHED_KEY, JSON.stringify(data));
    Notify.warning('Фильм Удалён из библиотеки');
    onOpenWatchLibrary();
  } else {
    await apiTheMovies.fetchById(this.currentId).then(onOpenCard);
  }
}

//== якщо клікаємо на карточку - запускається рендер модалки
//== (не актуально, йде перевірка з removeAndRenedrWatched)
// function watchedModalOpenOnCardClick(event) {
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   const currentId = event.target.closest('.movie-card__item').dataset.id;
//   apiTheMovies.setMovieId(currentId);
//   apiTheMovies.fetchById(currentId).then(onOpenCard);
// }

//== відкриття модалки
function onOpenCard(respModal) {
  let data = getWatchesList();
  const markUp = modalLibrarry(respModal);
  const instance = basicLightBox.create(markUp);
  instance.show();
  document.body.classList.add('stop-fon');

  //== видалення з бібліотеки по клавіші а також з локального
  const modalWatchedLibrBtn = document.querySelector('.modal-btn__watched');
  modalWatchedLibrBtn.textContent = 'remove from watched';
  modalWatchedLibrBtn.addEventListener('click', e => {
    const currentIdBtnWatch = e.target.dataset.id;
    if (data.find(film => film.id === Number(currentIdBtnWatch))) {
      let data = getWatchesList();
      data = data.filter(film => film.id !== Number(currentIdBtnWatch));
      localStorage.setItem(WATCHED_KEY, JSON.stringify(data));
      instance.close();
      Notify.warning('Фильм Удалён из библиотеки');
      onOpenWatchLibrary();
    }
  });

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

// //==QUEUE LIBRARRY, рендер сторінки

function getQueueList() {
  const dataQ = JSON.parse(localStorage.getItem(QUEUE_KEY));
  console.log(dataQ);
  if (!dataQ) {
    return;
  }
  return dataQ;
}

function onOpenQueueLibraty() {
  let datas = getQueueList();
  const markups = datas
    .map(el => {
      return movieWatches(el);
    })
    .join('');

  galleryQue.innerHTML = markups;
  gallery.innerHTML = '';

  if (!markups) {
    //== якщо немає фільмів - покажи розмітку
    gallery.innerHTML = noFilmsInLibrary();
  }
}

//== видалення при клікові на іконку на картці фільму QUEUE
async function removeAndRenderQueue(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const currentId = e.target.closest('.movie-card__item').dataset.id;
  apiTheMovies.setMovieId(currentId);

  if (e.target.id === 'close') {
    let data = getQueueList();
    data = data.filter(film => film.id !== Number(currentId));
    localStorage.setItem(QUEUE_KEY, JSON.stringify(data));
    Notify.warning('Фильм Удалён из библиотеки');
    onOpenQueueLibraty();
  } else {
    await apiTheMovies.fetchById(this.currentId).then(onOpenCardQue);
  }
}

//== також не актуально відкриваємо з попередньої функції
// function queueModalOpenOnCardClick(event) {
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   const currentId = event.target.closest('.movie-card__item').dataset.id;
//   apiTheMovies.setMovieId(currentId);
//   apiTheMovies.fetchById(currentId).then(onOpenCardQue);
// }

//== відкриття модалки
function onOpenCardQue(respModal) {
  let datas = getQueueList();
  const markUp = modalLibrarryQue(respModal);
  const instance = basicLightBox.create(markUp);
  instance.show();
  document.body.classList.add('stop-fon');

  //== видалення з бібліотеки по клавіші а також з локального
  const modalWatchedLibrBtnQue = document.querySelector('.modal-btn__queue');
  modalWatchedLibrBtnQue.textContent = 'remove from queue';
  modalWatchedLibrBtnQue.addEventListener('click', e => {
    const currentIdBtnWatch = e.target.dataset.id;
    if (datas.find(film => film.id === Number(currentIdBtnWatch))) {
      let datas = getQueueList();
      datas = datas.filter(film => film.id !== Number(currentIdBtnWatch));
      localStorage.setItem(QUEUE_KEY, JSON.stringify(datas));
      instance.close();
      Notify.warning('Фильм Удалён из библиотеки');
      onOpenQueueLibraty();
    }
  });

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

onOpenWatchLibrary();
