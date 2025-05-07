import { closeModal } from "./modal.js";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function handleSubmit(request, evt) {
    const button = evt.submitter;
    evt.submitter.textContent = 'Сохранить...';
    button.disabled = false;
    button.classList.remove('popup__button_disabled');
    evt.preventDefault()

  request()
    .then(() => {
      button.disabled = true;
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      evt.submitter.textContent = 'Сохранить';
      closeModal(evt.target.closest('.popup'))
    })
}

export {checkResponse, handleSubmit}