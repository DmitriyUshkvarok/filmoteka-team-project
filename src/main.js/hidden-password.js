const iconOpen = document.querySelector('.icon-open');
const iconClose = document.querySelector('.icon-close');
const inputPassword = document.querySelector('.input-password');

iconOpen.addEventListener('click', onToggleFunction);
iconClose.addEventListener('click', onToggleFunction);

function onToggleFunction() {
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
    iconOpen.classList.toggle('hide');
    iconClose.classList.toggle('hide');
  } else {
    inputPassword.type = 'password';
    iconOpen.classList.toggle('hide');
    iconClose.classList.toggle('hide');
  }
}
