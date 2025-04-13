const profileEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popups = document.querySelectorAll('.popup');
const profileAddCard = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_type_new-card');
const popupPic = document.querySelector('.popup__image');
const popupImg = document.querySelector('.popup_type_image');
const popupCaption = document.querySelector('.popup__caption')
const formProfile = document.forms['edit-profile'];
const inputName = formProfile.name;
const inputDescription = formProfile.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formCard = document.forms['new-place'];
const inputCardName = formCard['place-name'];
const inputCardLink = formCard.link;

export {profileEdit, popupEdit, popups, profileAddCard, popupCard, popupImg, popupPic, popupCaption, inputName, inputDescription, profileTitle, profileDescription, formProfile, formCard, inputCardName, inputCardLink }