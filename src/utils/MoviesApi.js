function getMovieList() {
  return fetch('https://api.nomoreparties.co/beatfilm-movies')
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(console.error);
}

export { getMovieList };
