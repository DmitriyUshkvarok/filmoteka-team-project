let scrollUpBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', onScrollFunction);

function onScrollFunction() {
    if (window.pageYOffset > 300) {
    scrollUpBtn.classList.add("shown");
  } else {
    scrollUpBtn.classList.remove("shown");
  }
}

scrollUpBtn.addEventListener('click', onScrollUp);

function onScrollUp(evt) {
  evt.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
