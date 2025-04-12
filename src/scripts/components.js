const profileEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popup = document.querySelectorAll('.popup');
const profileAddCard = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_type_new-card');
const popupPic = document.querySelector('.popup__image');
const popupImg = document.querySelector('.popup_type_image');
const popupCaption = document.querySelector('.popup__caption')
const formProfile = document.forms['edit-profile'];
const InputName = formProfile.name;
const InputDescription = formProfile.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formCard = document.forms['new-place'];
const InputCardName = formCard['place-name'];
const InputCardLink = formCard.link;

export {profileEdit, popupEdit, popup, profileAddCard, popupCard, popupImg, popupPic, popupCaption, InputName, InputDescription, profileTitle, profileDescription, formProfile, formCard, InputCardName, InputCardLink }