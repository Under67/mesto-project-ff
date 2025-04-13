function openModal(item) {
  item.classList.add('popup_is-animated');
  setTimeout(() => {
    item.classList.add("popup_is-opened");  
  }, 1); 
  document.addEventListener('keydown', handleEscPress);
}

function handleEscPress(evt) {
  if(evt.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened');
    closeModal(popup);
  }
}

function closeModal(item) {
  item.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscPress);
}

export {openModal, closeModal}