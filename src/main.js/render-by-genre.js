import { apiTheMovies} from './render-all-collection';
	
	import allCollection from '../templates/all-collection-movies.hbs';
	

	const genreList = document.querySelector('.genre-list');
	genreList.addEventListener('click', onCallByGanre);
	

	function onCallByGanre(e) {
	  if (e.currentTarget === e.target) {
	    return;
	  }
	  apiTheMoviesdb.resetPage();
	  apiThemoviedb.genreId = e.target.dataset.id;
	  apiThemoviedb.fetchFilmsByGenre(apiThemoviedb.genreId).then(onRenderbyGenre);
	}
	

	function onRenderbyGenre(owner) {
	  const markupGenre = allCollection(owner);
	  refs.gallery.innerHTML = markupGenre;
}
    


    const btnShowGenre = document.querySelector(".js-show-genres");
    btnShowGenre.addEventListener('click', onShowGenres);

    function onShowGenres() {
        var x = document.querySelector(".genre-list");
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    }