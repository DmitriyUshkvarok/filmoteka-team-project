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

function onClickImgModal(evt) {
  const imgModalWindow = document.querySelector('.modal-img');
  const btnWatchTrailer = document.querySelector('.modal-btn__trailer');
  const imgOverlayTrailer = document.querySelector('.img-overlay__trailer');

  if (evt.target === evt.currentTarget || evt.target === imgOverlayTrailer)
    return;
  //запросить данные о трейлере фильма на YouTube
  fetchTraiiler(imgModalWindow.dataset.id)
    .then(url => {
      showTrailer(url); //показать трейлер фильма
    })
    .catch(error => {
      console.log(error);
      Notify.info('No trailer for this movie');
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
      Notify.info('No trailer for this movie');
    });
}

function showTrailer(url) {
  const markUp = markUpIframe(url);
  instanceTrailer = basicLightbox.create(markUp);
  instanceTrailer.show();

  window.addEventListener('keydown', onKeydownWin); // закриття по ESC
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
  } else window.removeEventListener('keydown', onKeydownWin); // снять слушателя, когда модалка  с видео закроется
}

//`https://api.themoviedb.org/3/movie/${this.movieId}/videos?api_key=f27eea818d2010463700365b0c06a16e`;

//./images/sprite-play.svg#icon-iconfinder-play-4341313_120530
//./images/sprite-play.svg#icon-play-circle_icon-iconscom_69988
