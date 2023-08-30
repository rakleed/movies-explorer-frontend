import { BACKEND_BASE_URL } from './constants.js';

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}

function _getRequest(urlPath) {
  return fetch(`${BACKEND_BASE_URL}${urlPath}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(_checkResponse);
}

function _setRequest(urlPath, requestMethod) {
  return fetch(`${BACKEND_BASE_URL}${urlPath}`, {
    method: requestMethod,
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
    .then(_checkResponse);
}

function _setRequestWithBody(urlPath, requestMethod, requestBody) {
  return fetch(`${BACKEND_BASE_URL}${urlPath}`, {
    method: requestMethod,
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(_checkResponse);
}

function checkToken(token) {
  return fetch(`${BACKEND_BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
}

function register({ name, email, password }) {
  return fetch(`${BACKEND_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
}

function authorize({ email, password }) {
  return fetch(`${BACKEND_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
}

function getUserInfo() {
  return _getRequest('/users/me');
}

function setUserInfo(newProfileData) {
  return _setRequestWithBody('/users/me', 'PATCH', {
    name: newProfileData.name,
    email: newProfileData.email
  });
}

function getSavedMovies() {
  return _getRequest('/movies');
}

function addSavedMovie(movieInfo) {
  return _setRequestWithBody('/movies', 'POST', {
    movieId: movieInfo.id,
    nameRU: movieInfo.nameRU,
    nameEN: movieInfo.nameEN,
    director: movieInfo.director,
    country: movieInfo.country,
    year: movieInfo.year,
    duration: movieInfo.duration,
    description: movieInfo.description,
    trailerLink: movieInfo.trailerLink,
    image: 'https://api.nomoreparties.co' + movieInfo.image.url,
    thumbnail: 'https://api.nomoreparties.co' + movieInfo.image.formats.thumbnail.url
  });
}

function removeSavedMovie(movieId) {
  return _setRequest(`/movies/${movieId}`, 'DELETE');
}

export { checkToken, register, authorize, getUserInfo, setUserInfo, getSavedMovies, addSavedMovie, removeSavedMovie };
