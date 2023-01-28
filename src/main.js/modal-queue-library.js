import { ApiTheMovie } from "./fetch-class";
import * as basicLightBox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Notify } from "notiflix";
import { WATCHED_KEY } from "./render-favorites-movie";
import modalQueueMarkup from '../templates/modal-queue-library.hbs';
import movieQueue from '../templates/card-movie-queue.hbs';
import { getWatchedList } from "./watched-library-temp";
import { getWatchesList } from "./render-favorites-movie";
import { gallery } from "./render-favorites-movie";
const apiTheMovies = new ApiTheMovie();

//== реалізація відкриття модалки по кліку на картку
export async function watchedModalOpenOnCardClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  const currentId = event.target.closest('.movie-card__item').dataset.id;
  apiTheMovies.setMovieId(currentId);
  apiTheMovies.fetchById(currentId).then(onOpenCard); 
}
//== відкриття модалки
function onOpenCard(respModal) {
  const markUp = modalQueueMarkup(respModal);
  const instance = basicLightBox.create(markUp);
  instance.show();
  document.body.classList.add('stop-fon');
    
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
