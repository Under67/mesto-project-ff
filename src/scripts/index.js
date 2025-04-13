import '../pages/index.css';
import {initialCards} from './cards.js';
import * as component from './components.js'
import {openModal, closeModal} from './modal.js'
import {placesList, createCard, removeCard, likeCard} from './card.js';


initialCards.forEach(function(item) {
  const cloneCard = createCard(item.name, item.link, removeCard, setImagePopup, likeCard);
  placesList.append(cloneCard);
});

component.profileEdit.addEventListener('click', function() {
  openModal(component.popupEdit);
  component.inputName.value = component.profileTitle.textContent;
  component.inputDescription.value = component.profileDescription.textContent;
});

component.profileAddCard.addEventListener('click', function() {
  openModal(component.popupCard);
});

component.popups.forEach(function(popup) {
  popup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
      closeModal(popup);
    } 
    if (evt.target.classList.contains('popup__close')) {
      closeModal(popup);
    }
  });
});

component.formProfile.addEventListener('submit', function(evt) {
  evt.preventDefault();
  component.profileTitle.textContent = component.inputName.value;
  component.profileDescription.textContent = component.inputDescription.value;
  closeModal(component.popupEdit);
});

component.formCard.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const NewCard = createCard(component.inputCardName.value, component.inputCardLink.value, removeCard, setImagePopup, likeCard);
  placesList.prepend(NewCard);
  closeModal(component.popupCard);
  component.formCard.reset();
});

function setImagePopup(name, link) {
  component.popupPic.src = link;
  component.popupPic.alt = name;
  component.popupCaption.textContent = name;
  openModal(component.popupImg);
};







