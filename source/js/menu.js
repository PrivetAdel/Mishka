const nav = document.querySelector(`.main-nav`);
const toggle = nav.querySelector(`.main-nav__toggle`);

nav.classList.remove(`main-nav__nojs`);

function onToggleClick() {
  nav.classList.toggle(`main-nav__opened`);
}

toggle.addEventListener(`click`, onToggleClick);
