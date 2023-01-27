import allCollectionFunction from '../templates/all-collection-movies.hbs';
import { ApiTheMovie } from './fetch-class';
import Notiflix from 'notiflix';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

let genresList = [];
// Intersection Observer

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(onInfinityMoviesLoad, options);

// Rendering movies

export const apiTheMovies = new ApiTheMovie();
const gallery = document.querySelector('.gallery');
const guard = document.querySelector('.js-guard');

function onLoadAllMovies() {
  apiTheMovies.fetchAllFilms(apiTheMovies.page).then(renderMarkupAllMovieCard);
  observer.observe(guard);
}
onLoadAllMovies();
// ===================
function getAllGenres() {
  apiTheMovies.fetchAllgenres();
}
getAllGenres();
// ===================
// function ganreList() {
//   apiTheMovies.fetchAllgenres().then(makeValidatesGenreName);
// }
// ganreList();

// function makeValidatesGenreName({ data }) {
//   data.genres.forEach(genres => {
//     return genresList.push(genres.name);
//   });
// }
// let o = genresList;
// console.log(o);

function renderMarkupAllMovieCard(responseAll) {
  const resultAll = allCollectionFunction(responseAll);
  gallery.insertAdjacentHTML('beforeend', resultAll);
  // console.log(responseAll.results);
  if (responseAll.results.length === 0) {
    Notiflix.Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }
}

// Infinity scroll
export function onInfinityMoviesLoad(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      apiTheMovies.incrementPage();
      if (apiTheMovies.genreId) {
        apiTheMovies.fetchByGenre(this.genreId).then(renderMarkupAllMovieCard);
      } else if (apiTheMovies.searchValue) {
        apiTheMovies.fetchById(searchValue).then(renderMarkupAllMovieCard);
      } else {
        apiTheMovies.fetchAllFilms().then(renderMarkupAllMovieCard);
      }
    }
  });
}

// const makeValidatesGenreName = array => {
//   array.forEach(object => {
//     if (object.genre_ids) {
//       object.genre_ids.forEach((idGenre, indexGenre) => {
//         genresList.forEach(objectNames => {
//           if (objectNames.id === idGenre) {
//             object.genre_ids.splice(indexGenre, 1, objectNames['name']);
//           }
//         });
//       });
//     } else {
//       object.genre_ids = '';
//     }
//   });

//   return array;
// };
