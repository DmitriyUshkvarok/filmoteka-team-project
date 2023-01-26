import { ApiTheMovie } from './fetch-class';
import { Notify } from 'notiflix';

export const WATCHED_KEY = 'watched-key';
const apiTheMovies = new ApiTheMovie();

export function getWatchedList() {
  const data = JSON.parse(localStorage.getItem(WATCHED_KEY));
  if (!data) {
    return;
  }
  return data;
}
if (!JSON.parse(localStorage.getItem(WATCHED_KEY))) {
  localStorage.setItem(WATCHED_KEY, JSON.stringify([]));
}

export function renderMoviesinWatchedLibrary(e) {
  let data = getWatchedList();
  const currentIdBtnWatch = e.target.dataset.id;
  if (data.find(film => film.id === Number(currentIdBtnWatch))) {
    const modalLibrarryBtn = document.querySelector('.modal-btn__watched');
    modalLibrarryBtn.textContent = 'Add to watched';
    let data = getWatchedList();
    data = data.filter(film => film.id !== Number(currentIdBtnWatch));
    localStorage.setItem(WATCHED_KEY, JSON.stringify(data));
    Notify.warning('Фильм Удалён из библиотеки');
  } else {
    const modalLibrarryBtn = document.querySelector('.modal-btn__watched');
    modalLibrarryBtn.textContent = 'remove from watch';
    let data = getWatchedList();
    localStorage.setItem(WATCHED_KEY, JSON.stringify(data));
    apiTheMovies.setMovieId(currentIdBtnWatch);
    apiTheMovies.fetchById(currentIdBtnWatch).then(setMovieToLocalStorage);
    Notify.success('Фильм добавлен в библиотеку');
  }
}

//== устанавливаем ключ локального хранилища
export function setMovieToLocalStorage({
  poster_path,
  id,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
}) {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem(WATCHED_KEY));
  localStorage.setItem(
    WATCHED_KEY,
    JSON.stringify([
      ...dataFromLocalStorage,
      {
        poster_path,
        id,
        title,
        vote_average,
        vote_count,
        popularity,
        original_title,
        genres,
        overview,
      },
    ])
  );
}
