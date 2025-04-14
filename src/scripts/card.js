const cardTemplate = document.querySelector('#card-template').content;
const placesList= document.querySelector('.places__list');

function createCard(name, link, deleteCard, handleImageClick, likeCard) {
  const cloneCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardDeleteButton = cloneCard.querySelector('.card__delete-button');
  const cardImg = cloneCard.querySelector('.card__image');
  const cardTitle = cloneCard.querySelector('.card__title');
  const cardLike = cloneCard.querySelector('.card__like-button');
  cardImg.setAttribute('alt', name);
  cardImg.setAttribute('src', link);
  cardTitle.textContent = name;
  cardImg.addEventListener('click', function() {
    return handleImageClick(name, link);
  });
  cardLike.addEventListener('click', function () {
    return likeCard(cardLike);
  })
  cardDeleteButton.addEventListener('click', function() { 
    return deleteCard(cloneCard);
  });
  return cloneCard;
}
 
function removeCard (cloneCard) {
  cloneCard.remove();
}

function likeCard(cardLike) {
  cardLike.classList.toggle('card__like-button_is-active');
}

export {placesList, createCard, removeCard, likeCard};