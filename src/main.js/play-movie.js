import { ApiTheMovie } from './fetch-class';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Notify } from 'notiflix';

const apiTheMovies = new ApiTheMovie();
export let instanceTrailer = basicLightbox.create('');

export function searchTrailer() {
  const imgContainer = document.querySelector('.img-container');
  imgContainer.addEventListener('click', onClickImgModal);
}

function onClickImgModal() {
  const imgModalWindow = document.querySelector('.modal-img');
  const btnWatchTrailer = document.querySelector('.modal-btn__trailer');

  //запросить данные о трейлере фильма на YouTube
  fetchTraiiler(imgModalWindow.dataset.id)
    .then(url => {
      showTrailer(url); //показать трейлер фильма
    })
    .catch(error => {
      console.log(error);
    });

  btnWatchTrailer.blur();
}

function fetchTraiiler(movieId) {
  apiTheMovies.setMovieId(movieId);
  return apiTheMovies
    .fetchTrailerMovies()
    .then(patchTrailer)
    .catch(error => {
      console.log(error);
      Notify.info('No trailer');
    });
}

function showTrailer(url) {
  const markUp = markUpIframe(url);
  instanceTrailer = basicLightbox.create(markUp);
  instanceTrailer.show();

  window.addEventListener('keydown', onKeydownWin); // закриття по ESC

  const ins = instanceTrailer.element();
  console.log(ins);
}

function patchTrailer({ results }) {
  const { key } = results[0];
  return getUrlTrailer(key);
}

function getUrlTrailer(keyTrailer) {
  return `https://www.youtube.com/embed/${keyTrailer}?eneblejapi=1&autoplay=1`;
}

function markUpIframe(url) {
  return `
    <div class="wrapper-iframe">
      <iframe src=${url} frameborder="0" allow="autoplay" allowfullscreen id='video_trailer'></iframe>
     </div>
  `;
}

function onKeydownWin(evt) {
  if (evt.code === 'Escape' && instanceTrailer.visible()) {
    instanceTrailer.close();
  } else window.removeEventListener('keydown', onKeydownWin);
}
