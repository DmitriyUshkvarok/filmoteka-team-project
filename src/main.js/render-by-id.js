import { ApiTheMovie } from './fetch-class';
import modalFunction from '../templates/modal-movies.hbs'
import *as basicLightBox  from "basiclightbox";
import 'basiclightbox/dist/basicLightbox.min.css';
import {
    getWatchedList,
    renderMoviesinWatchedLibrary,
    setMovieToLocalStorage
} from './watched-library-temp';

const apiTheMovies = new ApiTheMovie();
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onCardClick);

function onCardClick(event) {
 if (event.target === event.currentTarget) {
     return;
    }
    
    const currentId = event.target.closest('.movie-card__item').dataset.id;
    apiTheMovies.setMovieId(currentId)
    apiTheMovies.fetchById(currentId)
    .then(onOpenCard);
}

function onOpenCard(data) {
    console.log(data);
    const markUp = modalFunction(data);
    const instance = basicLightBox.create(markUp);
    instance.show();
    document.body.classList.add('stop-fon');
    //==  міняємо ADD TO WATCHED на REMOVE FROM WATCHED
    let watchedList = getWatchedList();
    const modalLibrarryBtn = document.querySelector('.modal-btn__watched');
  if (!watchedList.find(film => film.id === data.id)) {
    modalLibrarryBtn.textContent = 'Add to watched';
  } else {
    modalLibrarryBtn.textContent = 'Remove from watched';
  }

//== закриття бекдропа ESC
window.addEventListener('keydown', onKeydownEsc);
function onKeydownEsc(event) {
    if (event.code === 'Escape') {
        instance.close()
        document.body.classList.remove('stop-fon');
    }
    };    

    //== добавити карточку в WATCHED
    modalLibrarryBtn.addEventListener('click', renderMoviesinWatchedLibrary);
}



