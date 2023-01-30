window.addEventListener('load', preloadFunction);

function preloadFunction() {
  /* Страница загружена, включая все ресурсы */
  const preloader = document.querySelector(
    '.whirly-loader__wrapper'
  ); /* находим блок Preloader */
  preloader.classList.add(
    'preloader_hidden'
  ); /* добавляем ему класс для скрытия */
}
