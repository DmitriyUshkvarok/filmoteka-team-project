import { ApiTheMovie } from './fetch-class';
import modalFunction from '../templates/modal-movies.hbs';
import * as basicLightBox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { searchTrailer } from './play-movie';

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
  searchTrailer();
}
