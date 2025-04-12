import * as component from './components.js';
import {openModal} from './modal.js'

const cardTemplate = document.querySelector('#card-template').content;
const placesList= document.querySelector('.places__list');

function createCard(name, link, deleteCard, Image, like) {
  const cloneCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardDeleteButton = cloneCard.querySelector('.card__delete-button');
  const cardImg = cloneCard.querySelector('.card__image');
  const cardTitle = cloneCard.querySelector('.card__title');
  const cardLike = cloneCard.querySelector('.card__like-button');
  cardImg.setAttribute('alt', name);
  cardImg.setAttribute('src', link);
  cardTitle.textContent = name;
  cardImg.addEventListener('click', function() {
      return Image(name, link);
  });
  cardLike.addEventListener('click', function () {
    return like(cardLike);
  })
  cardDeleteButton.addEventListener('click', function() { 
    return deleteCard(cloneCard);
  });
  return cloneCard;
}
 
function removeCard (cloneCard) {
  cloneCard.remove();
}

function like(cardLike) {
  cardLike.classList.toggle('card__like-button_is-active');
}

function popupImage(name, link) {
  component.popupPic.src = link;
  component.popupPic.alt = name;
  component.popupCaption.textContent = name;
  openModal(component.popupImg);
}

function CardInitial(item) {
  const cloneCard = createCard(item.name, item.link, removeCard, popupImage, like);
  placesList.append(cloneCard);
};

export {placesList, createCard, removeCard, like, popupImage, CardInitial };