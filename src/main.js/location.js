const wrapper = document.querySelector('.wrapper-language');
const lang = document.querySelector('.language');
wrapper.addEventListener('click', onShowsList);

function onShowsList() {
  lang.classList.toggle('shows');
}
