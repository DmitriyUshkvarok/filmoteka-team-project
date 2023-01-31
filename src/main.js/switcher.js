import { preloaderSetTimeOut } from './preloader';
const themeBtn = document.querySelector('.switcher-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
  document.body.classList.add('toggle-theme');
  document.getElementById('slider').checked = true;
} else {
  document.getElementById('slider').checked = false;
}

themeBtn.addEventListener('click', onToggleTheme);

function onToggleTheme() {
  preloaderSetTimeOut();
  document.body.classList.toggle('toggle-theme');

  // Допустим, тема светлая
  let theme = 'light';
  // Если <body> содержит класс .dark-theme…
  if (document.body.classList.contains('toggle-theme')) {
    // …тогда делаем тему тёмной
    theme = 'dark';
  }
  // После чего сохраняем выбор в localStorage
  localStorage.setItem('theme', theme);
}
