import {closeModal} from "./modal.js";

function handleSubmit(request, evt) {
    const button = evt.submitter;
    evt.submitter.textContent = 'Сохранить...';
    button.disabled = true;
    button.classList.remove('popup__button_disabled');
    evt.preventDefault()
    const popup = evt.target.closest('.popup')
    const popupForm = popup.querySelector('.popup__form')

  request()
    .then(() => {
      closeModal(popup)
      popupForm.reset();
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      evt.submitter.textContent = 'Сохранить';
      button.disabled = false;
    })
}

export {handleSubmit}