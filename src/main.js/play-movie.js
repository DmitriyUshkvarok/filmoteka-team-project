import { ApiTheMovie } from './fetch-class';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Notify } from 'notiflix';

const apiTheMovies = new ApiTheMovie();
export let instanceTrailer = basicLightbox.create('');
// закриття по ESC
window.addEventListener('keydown', onKeydownWin);

function onKeydownWin(evt) {
  if (evt.code === 'Escape' && instanceTrailer.visible()) {
    instanceTrailer.close();
  }
}
export function searchTrailer() {
  const imgModalWindow = document.querySelector('.modal-img');
  imgModalWindow.addEventListener('click', onClickImgModal);
}

function onClickImgModal(evt) {
  //запросить данные о трейлере фильма на YouTube
  fetchTraiiler(evt.target.dataset.id)
    .then(url => {
      showTrailer(url); //показать трейлер фильма
    })
    .catch(error => {
      console.log(error);
    });
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
    <div>
      <iframe src=${url} width="850" height="588" frameborder="0" allow="autoplay" allowfullscreen id='video_trailer'></iframe>
     </div>
  `;
}

// снять слушателя, когда модалка  с видео закроется
// при закритті модалки видалити її розмітку - перевірити авто

//`https://api.themoviedb.org/3/movie/${this.movieId}/videos?api_key=f27eea818d2010463700365b0c06a16e`;

// export function searchTrailer() {
//   const imgModalWindow = document.querySelector('.modal-img');
//   imgModalWindow.addEventListener('click', onClickImgModal);
// }

// function onClickImgModal(evt) {
//   fetchTraiiler(evt.target.dataset.id); //запросить данные о трейлере фильма на YouTube
// }

// function fetchTraiiler(movieId) {
//   apiTheMovies.setMovieId(movieId);
//   apiTheMovies
//     .fetchTrailerMovies()
//     .then(openTrailer)
//     .catch(error => {
//       console.log(error);
//       Notify.info('No trailer');
//     });
// }

// function openTrailer({ results }) {
//   const { key } = results[0];
//   const urlTrailer = getUrlTrailer(key);
//   showTrailer(urlTrailer);
// }

// function getUrlTrailer(keyTreiler) {
//   return `https://www.youtube.com/embed/${keyTreiler}?eneblejapi=1&autoplay=1`;
// }

// function showTrailer(url) {
//   const markUp = `
//     <div>
//       <iframe src=${url} width="850" height="588" frameborder="0" allowfullscreen id='video_trailer'></iframe>
//      </div>
//   `;
//   const instance = basicLightbox.create(markUp);
// const iframeTrailer = document.getElementById('video_trailer');
// console.log('video_trailer', iframeTrailer);
// iframeTrailer.contentWindow.postMessage(
//   '{"event":"command","func":"playVideo","args":""}',   // НЕ РАБОТАЕТ автоматическая загрузка
//   '*'
// );
// ТОЖЕ САМОЕ
// document.getElementById('video_trailer').contentWindow.postMessage(
//   '{"event":"command","func":"playVideo","args":""}', // НЕ РАБОТАЕТ автоматическая загрузка
//   'https://www.youtube.com/'
// );
// instance.show();
// const ins = instance.element();
//  console.log(ins);
//}
