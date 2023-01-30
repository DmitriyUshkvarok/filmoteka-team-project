import { ApiTheMovie } from './fetch-class';
export const apiTheMovies = new ApiTheMovie();

// putting movie genres list into Local Storage
let genres;

const saveGenres = genres => {
  let genresList = [...genres];

  localStorage.setItem('genres', JSON.stringify(genresList));
};

export function makeGenresList () {
  apiTheMovies.fetchAllgenres().then(saveGenres);
};
// makeGenresList();


// Making short date, like 2020

export function makeValidatesReleaseDate(data) {
  return data.slice(0, 4);
};

export function makeShortReleaseDate (object) {
  object.results.forEach(movie => {
    movie.release_date = movie.release_date
      ? makeValidatesReleaseDate(movie.release_date)
      : '';
  });
  return object;
};

// Make validate genre names

export function makeValidatesGenreName (response) {
  genres = JSON.parse(localStorage.getItem('genres'));
  if (!genres) {
    return;
  }

  response.results.forEach(movieEl => {
    if (movieEl.genre_ids) {
      movieEl.genre_ids.forEach((idGenre, indexGenre) => {
        genres.forEach(objectNames => {
          if (objectNames.id === idGenre) {
            movieEl.genre_ids.splice(indexGenre, 1, objectNames['name']);
          }
        });
      });
    } else {
      movieEl.genre_ids = '';
    }
  });

  return response;
};

// Making validate votes and popularity of movie

function makeValidatesVoteAndPopularity(data) {
  return data.toFixed(1);
};

export function makeShortVoteAndPopularity(movie) {
  movie.vote_average = movie.vote_average ? makeValidatesVoteAndPopularity(movie.vote_average) : '';
  movie.popularity = movie.popularity ? makeValidatesVoteAndPopularity(movie.popularity) : '';
  return movie;
};

// Validate movie data in library

export function makeValidateMovieData (movie) {
  movie.forEach(movieEl => {
    if (movieEl.genres) {
      movieEl.genres = movieEl.genres.map(genre => genre.name);
    } else {
      movieEl.genres = '';
    }
    movieEl.release_date = movieEl.release_date
      ? movieEl.release_date.slice(0, 4)
      : '';
    makeShortVoteAndPopularity(movieEl);
  });
  return movie;
};
