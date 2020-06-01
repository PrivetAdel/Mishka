const btnOrder = document.querySelector(`.offer__button`);
const btnOrders = document.querySelectorAll(`.card__icon`);
const overlay = document.querySelector(`.popup__overlay`);

const openPopup = function () {
  overlay.classList.add(`popup__overlay--show`);
}

const closePopup = function () {
  overlay.classList.remove(`popup__overlay--show`);
}

function orderHandler() {
  openPopup();

  overlay.addEventListener(`click`, closePopup);

  window.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === 27) {
      if (overlay.classList.contains(`popup__overlay--show`)) {
        closePopup();
      }
    }
  });
}

for (let i = 0; i < btnOrders.length; i++) {
  btnOrders[i].addEventListener(`click`, orderHandler);
}

btnOrder.addEventListener(`click`, orderHandler);
