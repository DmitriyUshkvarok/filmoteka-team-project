// import *as basicLightBox from "basiclightbox";
// import 'basiclightbox/dist/basicLightbox.min.css';


const teamLink = document.querySelector('.footer__team-link');
const modal = document.querySelector('.team-modal');
const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.team-modal__backdrop');


teamLink.addEventListener('click', onModalClick);
closeModalBtn.addEventListener('click', onModalClick);

function onModalClick(event) {
    event.preventDefault();
    modal.classList.toggle("is-hidden");
 
    window.addEventListener('keydown', onKeydownEsc);
    function onKeydownEsc(event) {
        if (event.code === 'Escape') {
    modal.classList.add("is-hidden");
        }
            
    }

    modal.addEventListener('click', (event) => {
        if (event.target === backdrop) {
      modal.classList.add("is-hidden");
  }
}); 
}




