import allCollectionFunction from '../templates/all-collection-movies.hbs';
import { ApiTheMovie } from './fetch-class';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { async } from '@firebase/util';

const apiTheMovies = new ApiTheMovie();
const form = document.querySelector('.header-form');
const input = document.querySelector('.header-input');
const warning = document.querySelector('.js-search');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) { 
    e.preventDefault();

    apiTheMovies.searchValue = input.value;
    const res = await apiTheMovies.fetchBySearch();

    if (res.total_results == 0) { 
        warning.style.color = '#FF001B';
        warning.style.textAlign = 'center';
        warning.style.marginBottom = '10px';
        warning.removeAttribute('hidden');
        // warning.style.visibility = 'visible';
        setTimeout(() => {
            // warning.style.visibility = 'hidden';
            warning.setAttribute('hidden', '');
        }, 3000);
        return;
    }
    createMarkup(res);
}

function createMarkup(array) { 
    const result = allCollectionFunction(array);
    gallery.innerHTML = result;
}