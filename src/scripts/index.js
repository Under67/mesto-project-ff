import '../pages/index.css';
import {CardInitial} from './card.js';
import {initialCards} from './cards.js';
import * as component from './components.js'
import {handleFormProfile, handleFormCard, popupEdit, popupCard, popupClose} from './modal.js'


initialCards.forEach(CardInitial)

component.profileEdit.addEventListener('click', popupEdit);

component.profileAddCard.addEventListener('click', popupCard);

component.popup.forEach(popupClose);

component.formProfile.addEventListener('submit', handleFormProfile);

component.formCard.addEventListener('submit', handleFormCard);








