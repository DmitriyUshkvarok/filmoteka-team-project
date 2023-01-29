import { apiTheMovies } from './render-all-collection';
import allCollection from '../templates/all-collection-movies.hbs';
import { makeValidatesGenreName } from './render-all-collection';
import { makeValidatesReleaseDate } from './render-all-collection';
import { makeShortReleaseDate } from './render-all-collection';

const genreList = document.querySelector('.genre-list');
const gallery = document.querySelector('.gallery');

genreList.addEventListener('click', onCallByGenre);

function onCallByGenre(e) {
  if (e.currentTarget === e.target) {
    return;
  }

  apiTheMovies.resetPage();

  apiTheMovies.genreId = e.target.dataset.id;
  apiTheMovies.fetchByGenre(apiTheMovies.genreId)
    .then(makeValidatesGenreName)
    .then(makeShortReleaseDate)
    .then(onRenderbyGenre);
}

function onRenderbyGenre(owner) {
  const markupGenre = allCollection(owner);
  gallery.innerHTML = markupGenre;
}

const btnShowGenre = document.querySelector('.genres-button');
btnShowGenre.addEventListener('click', onShowGenres);

const genres = document.querySelector('#genres');

function onShowGenres() {
  slideToggle(genres, 400);
}

let slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

let slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none') display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

let slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};
