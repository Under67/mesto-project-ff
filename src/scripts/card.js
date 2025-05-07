import { deleteCard, deleteLikeCard, setLikeCard} from "./api";

const cardTemplate = document.querySelector('#card-template').content;
const placesList= document.querySelector('.places__list');

function createCard(card, removeCard, handleImageClick, likeCard, userId) {
  const cloneCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardDeleteButton = cloneCard.querySelector('.card__delete-button');
  const cardImg = cloneCard.querySelector('.card__image');
  const cardTitle = cloneCard.querySelector('.card__title');
  const cardLike = cloneCard.querySelector('.card__like-button');
  const cardLikeCount = cloneCard.querySelector('.card__like-count');
  cardImg.setAttribute('alt', card.name);
  cardImg.setAttribute('src', card.link);
  cardTitle.textContent = card.name;
  cardLikeCount.textContent = card.likes.length;
  card.likes.forEach(function(elem) {
    if (elem['_id'] === userId) {
      return likeCard(cardLike);
    }
  })
  cardImg.addEventListener('click', function() {
    return handleImageClick(card.name, card.link);
  });
  cardLike.addEventListener('click', function () {
    if (cardLike.classList.contains('card__like-button_is-active')) {
      deleteLikeCard(card['_id'])
      .then((card) => {
        cardLikeCount.textContent = card.likes.length;
        return likeCard(cardLike);
      })
      .catch ((err) => console.log('Поймали ошибку! Вот она: ', err.message));
    } else {
      setLikeCard(card['_id'])
      .then((card) => {
        cardLikeCount.textContent = card.likes.length;
        return likeCard(cardLike);
      })
      .catch ((err) => console.log('Поймали ошибку! Вот она: ', err.message));
    }
  })
    if (card.owner['_id'] === userId) {
      cardDeleteButton.addEventListener('click', function() {
        deleteCard(card['_id']) 
        .then(() => {
          return removeCard(cloneCard);
        })
        .catch ((err) => console.log('Поймали ошибку! Вот она: ', err.message));
      })
    } else {
      cardDeleteButton.remove();
    };
  return cloneCard;
}
 
function removeCard (cloneCard) {
  cloneCard.remove();
}

function likeCard(cardLike) {
  cardLike.classList.toggle('card__like-button_is-active');
}

export {placesList, createCard, removeCard, likeCard};