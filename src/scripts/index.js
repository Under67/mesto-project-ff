import '../pages/index.css';
import * as component from './components.js'
import {openModal, closeModal} from './modal.js'
import {placesList, createCard, removeCard, likeCard} from './card.js';
import {enableValidation, clearValidation, validationConfig} from './validation.js'
import {getInfoProfile, getInitialCards, patchUserProfile, postCard, postAvatar} from './api.js';
import { handleSubmit } from './additional.js';

export let userId;

component.profileEdit.addEventListener('click', function() {
  openModal(component.popupEdit);
  clearValidation(validationConfig, component.formProfile);
  component.inputName.value = component.profileTitle.textContent;
  component.inputDescription.value = component.profileDescription.textContent;
});

component.profileAddCard.addEventListener('click', function() {
  openModal(component.popupCard);
  clearValidation(validationConfig, component.formCard);
});

component.profileImage.addEventListener('click', function() {
  openModal(component.popupAvatar);
  clearValidation(validationConfig, component.formAvatar);
})

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
  function request() {
    return patchUserProfile(component.inputName.value, component.inputDescription.value)
  .then((card) => {
    component.profileTitle.textContent = card.name;
    component.profileDescription.textContent = card.about;
    });
  }
  handleSubmit(request,evt);
})

component.formAvatar.addEventListener('submit', function(evt) {
  function request() {
    return postAvatar(component.inputAvatar.value)
  .then((profile) => component.profileImage.style.backgroundImage = `url(${profile.avatar})`);
  }
  handleSubmit(request, evt);
  component.formAvatar.reset();
})

component.formCard.addEventListener('submit', function(evt) {
  function request() {
    return postCard(component.inputCardName.value, component.inputCardLink.value)
  .then((card) => {
    const newCard = createCard(card, removeCard, handleImageClick, likeCard);
    placesList.prepend(newCard);
    });
  }
  handleSubmit(request, evt);
  component.formCard.reset();
});

function handleImageClick(name, link) {
  component.popupPic.src = link;
  component.popupPic.alt = name;
  component.popupCaption.textContent = name;
  openModal(component.popupImg);
};

enableValidation(validationConfig); 

Promise.all([getInfoProfile(), getInitialCards()]) 
  .then(([profile, cards]) => {
    component.profileTitle.textContent = profile.name;
    component.profileDescription.textContent = profile.about;
    component.profileImage.setAttribute('style', `background-image: url(${profile.avatar})`);
    userId = profile['_id'];
    cards.forEach(function(item) {
      const cloneCard = createCard(item, removeCard, handleImageClick, likeCard);
      placesList.append(cloneCard);
    }); 

  })
