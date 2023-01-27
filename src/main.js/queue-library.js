import { ApiTheMovie } from './fetch-class';
import { Notify } from 'notiflix';

export const QUEUE_KEY = 'queue-key';
const apiTheMovies = new ApiTheMovie();

export function getQueueList() {
  const data = JSON.parse(localStorage.getItem(QUEUE_KEY));
  if (!data) {
    return;
  }
  return data;
}
if (!JSON.parse(localStorage.getItem(QUEUE_KEY))) {
  localStorage.setItem(QUEUE_KEY, JSON.stringify([]));
}

export function renderMoviesinQueueLibrary(e) {
  let data = getQueueList();
  const currentIdBtnQueue = e.target.dataset.id;
  if (data.find(film => film.id === Number(currentIdBtnQueue))) {
    const modalLibrarryBtn = document.querySelector('.modal-btn__queue');
    modalLibrarryBtn.textContent = 'Add to watched';
    let data = getQueueList();
    data = data.filter(film => film.id !== Number(currentIdBtnQueue));
    localStorage.setItem(QUEUE_KEY, JSON.stringify(data));
    Notify.warning('Фильм Удалён из библиотеки');
  } else {
    const modalLibrarryBtn = document.querySelector('.modal-btn__queue');
    modalLibrarryBtn.textContent = 'remove from watch';
    let data = getQueueList();
    localStorage.setItem(QUEUE_KEY, JSON.stringify(data));
    apiTheMovies.setMovieId(currentIdBtnQueue);
    apiTheMovies.fetchById(currentIdBtnQueue).then(setMovieToLocalStorage);
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
  release_date,
}) {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem(QUEUE_KEY));
  localStorage.setItem(
    QUEUE_KEY,
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
        release_date,
      },
    ])
  );
}
