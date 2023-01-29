// import *as basicLightBox from "basiclightbox";
// import 'basiclightbox/dist/basicLightbox.min.css';


const teamLink = document.querySelector('.footer__team-link');
const modal = document.querySelector('.team-modal');
const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.team-modal__backdrop');


teamLink.addEventListener('click', onModalClick);
closeModalBtn.addEventListener('click', onCloseClick);

function onModalClick() {  
document.body.style.overflow = "hidden";   
modal.classList.toggle("is-hidden");
window.addEventListener('keydown', onKeydownEsc);

function onKeydownEsc(event) {
    if (event.code === 'Escape') {
        modal.classList.add("is-hidden");
        document.body.style.overflow = "scroll";
    }         
    }
    
modal.addEventListener('click', (event) => {
    if (event.target === backdrop) {
        modal.classList.add("is-hidden");
        document.body.style.overflow = "scroll";
     }    
}); 
}

function onCloseClick() {
    modal.classList.toggle("is-hidden");
    document.body.style.overflow = "scroll";
}



