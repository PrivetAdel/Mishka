const btnOrder = document.querySelector(`.offer__button`);
const btnOrders = document.querySelectorAll(`.card__icon`);
const popup = document.querySelector(`.popup`);
const overlay = document.querySelector(`.popup__overlay`);
const popupBtn = document.querySelector(`.popup__submit`);

const openPopup = function () {
  popup.classList.add(`popup__show`);
}

const closePopup = function () {
  popup.classList.remove(`popup__show`);
}

function orderHandler() {
  openPopup();

  overlay.addEventListener(`click`, closePopup);

  window.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains(`popup__show`)) {
        closePopup();
      }
    }
  });
}

if (btnOrder) {
  btnOrder.addEventListener(`click`, orderHandler);
} else {
  for (let i = 0; i < btnOrders.length; i++) {
    btnOrders[i].addEventListener(`click`, orderHandler);
  }
}

popupBtn.addEventListener(`click`, function(evt) {
  evt.preventDefault();
  closePopup();
});
