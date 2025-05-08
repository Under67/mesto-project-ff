const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-38',
  headers: {
    authorization: 'a04ecdbf-246a-4f34-8cd7-a30ee351ba0c',
    'Content-Type': 'application/json'
  }
}

function request(url, options) {
  return fetch(`${config.baseUrl}` + url, options);
}

function getInfoProfile() {
  return request('/users/me', { headers : config.headers })
  .then(checkResponse);
}

function getInitialCards() {
  return request('/cards', { headers : config.headers })
  .then(checkResponse);
}

function patchUserProfile(profileName, profileAbout) {
  return request('/users/me', {
    method : 'PATCH',
    headers : config.headers,
    body : JSON.stringify({
      name: profileName,
      about: profileAbout
    })
  })
  .then(checkResponse)
}

function postCard(cardName, cardLink) {
  return request('/cards', {
    method : 'POST',
    headers : config.headers,
    body : JSON.stringify({
      name : cardName,
      link : cardLink
    })
  })
  .then(checkResponse)
}

function deleteCard(cardId) {
  return request('/cards' + `/${cardId}`, {
    method : 'DELETE',
    headers : config.headers,
  })
  .then(checkResponse)
}

function setLikeCard (cardId) {
  return request('/cards/likes' + `/${cardId}`, {
    method : 'PUT',
    headers : config.headers,
  })
  .then(checkResponse)
}

function postAvatar (pic) {
  return request('/users/me/avatar', {
    method : 'PATCH',
    headers : config.headers,
    body : JSON.stringify({
      avatar : pic
    })
  })
  .then(checkResponse)
}

function deleteLikeCard (cardId) {
  return request('/cards/likes' + `/${cardId}`, {
    method : 'DELETE',
    headers : config.headers,
  })
  .then(checkResponse)
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export {patchUserProfile, getInitialCards, getInfoProfile, postCard, deleteCard, setLikeCard, deleteLikeCard, postAvatar, checkResponse}