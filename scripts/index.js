// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList= document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(name, link, deleteCard) {
  const cloneCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardDeleteButton = cloneCard.querySelector('.card__delete-button');
  cloneCard.querySelector('.card__image').setAttribute('alt', name)
  cloneCard.querySelector('.card__image').setAttribute('src', link);
  cloneCard.querySelector('.card__title').textContent = name;
  cardDeleteButton.addEventListener('click', function() { 
    return deleteCard(cloneCard);
  });
  return cloneCard;
}
// @todo: Функция удаления карточки
function removeCard (cloneCard) {
  cloneCard.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
  const cloneCard = createCard(item.name, item.link, removeCard);
  placesList.append(cloneCard);
});
