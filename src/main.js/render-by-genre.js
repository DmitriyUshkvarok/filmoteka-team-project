import { apiTheMovies } from './render-all-collection';
import allCollection from '../templates/all-collection-movies.hbs';

const genreList = document.querySelector('.genre-list');
const gallery = document.querySelector('.gallery');

genreList.addEventListener('click', onCallByGenre);

function onCallByGenre(e) {
  if (e.currentTarget === e.target) {
    return;
  }

  apiTheMovies.resetPage();

  apiTheMovies.genreId = e.target.dataset.id;
  apiTheMovies.fetchByGenre(apiTheMovies.genreId).then(onRenderbyGenre);
}

function onRenderbyGenre(owner) {
  const markupGenre = allCollection(owner);
  gallery.innerHTML = markupGenre;
}

const btnShowGenre = document.querySelector('.genres-button');
btnShowGenre.addEventListener('click', onShowGenres);

function onShowGenres() {
  var x = document.querySelector('.genre-list');
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
}
