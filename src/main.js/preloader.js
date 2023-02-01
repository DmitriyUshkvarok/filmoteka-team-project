window.addEventListener('load', preloadFunction);

function preloadFunction() {
  /* Страница загружена, включая все ресурсы */
  const preloader =
    document.querySelector('#preloader'); /* находим блок Preloader */
  preloader.classList.add(
    'preloader_hidden'
  ); /* добавляем ему класс для скрытия */
}

export function preloaderSetTimeOut() {
  const preloader = document.querySelector('#preloader');
  preloader.style.display = 'block';
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 500);
}
