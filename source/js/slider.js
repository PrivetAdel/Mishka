const slider = document.querySelector(`.reviews__slider`);
const slides = document.querySelectorAll(`.reviews__blockquote`);
const controls = document.querySelectorAll(`.control`);
const reviewsWrapper = document.querySelector(`.reviews__wrapper`);

let currentIndex = 0;

function move(newIndex) {
  slides[newIndex].style.display = `block`;
  slides[currentIndex].style.animation = `fade 0.6s 1`;
  slides[newIndex].style.animation = `display 0.6s 1`;
  slides[currentIndex].style.display = `none`;

  setTimeout(() => {
    currentIndex = newIndex;
  }, 600);
}

function slide() {
  let firstSlide = 0;
  let lastSlide = slides.length - 1;

  let isLast = currentIndex < lastSlide;
  let next = isLast ? (+currentIndex + 1) : firstSlide;

  let isFirst = currentIndex === 0;
  let prev = isFirst ? lastSlide : (+currentIndex - 1);

  this.classList.contains(`next`) ? move(next) : move(prev);
}

controls.forEach(control => control.addEventListener(`click`, slide));
