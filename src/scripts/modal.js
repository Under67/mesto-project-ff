import * as component from './components.js';
import {placesList, createCard, removeCard, like, popupImage} from './card.js';

function openModal(item) {
  item.classList.add('popup_is-opened', 'popup_is-animated');
  document.addEventListener('keydown', handleEscPress);
}

function handleEscPress(evt) {
  if(evt.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened')
    closeModal(popup)
  }
}

function closeModal(item) {
  item.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscPress);
}

function handleFormProfile(evt) {
  evt.preventDefault();
  component.profileTitle.textContent = component.InputName.value;
  component.profileDescription.textContent = component.InputDescription.value;
  closeModal(component.popupEdit);
}

function handleFormCard(evt) {
  evt.preventDefault();
  const NewCard = createCard(component.InputCardName.value, component.InputCardLink.value, removeCard, popupImage, like);
  placesList.prepend(NewCard);
  closeModal(component.popupCard);
  component.formCard.reset();
}

function popupEdit() {
  openModal(component.popupEdit);
  component.InputName.value = component.profileTitle.textContent;
  component.InputDescription.value = component.profileDescription.textContent;
}

function popupCard() {
  openModal(component.popupCard);
}

function popupClose(popup) {
  popup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
      closeModal(popup);
    } 
    if (evt.target.classList.contains('popup__close')) {
      closeModal(popup);
    }
  });
}

export {openModal, closeModal, handleFormProfile, handleFormCard, popupEdit, popupCard, popupClose}