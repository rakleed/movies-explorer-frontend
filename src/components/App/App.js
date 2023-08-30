import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { SHORT_MOVIE_LENGTH } from '../../utils/constants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState(localStorage.getItem('searchQuery') || '');
  const [isShortFilm, setIsShortFilm] = React.useState(
    JSON.parse(localStorage.getItem('isShort')) || false
  );
  const [savedMovies, setSavedMovies] = React.useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      MainApi.checkToken(token).then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject();
      })
        .then(() => {
          setIsLoggedIn(true);

          if (location.pathname === '/signin' || location.pathname === '/signup') {
            navigate('/movies', { replace: true });
          }
          // navigate('/', {replace: true});
        })
        .catch(() => {
          setIsLoggedIn(false);
          localStorage.removeItem('token');
          // navigate('/signin', {replace: true});
        })
    }
  }, [])

  React.useEffect(() => {
    if (isLoggedIn) {
      MainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  function handleRegister(values) {
    MainApi.register(values)
      .then((res) => {
        if (res.ok) {
          // setIsSuccess(true);
          // setIsInfoTooltipPopupOpen(true);
          // setTimeout(() => navigate('/signin', {replace: true}), 1500);
          handleLogin({ email: values.email, password: values.password });
        } else if (res.status === 400) {
          // setIsSuccess(false);
          console.error('400: некорректно заполнено одно из полей');
          // setIsInfoTooltipPopupOpen(true);
        }
      })
      .catch(console.error);
  }

  function handleLogin(values) {
    MainApi.authorize(values)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // return Promise.reject(res)
        return res.json().then(res => {throw new Error(res.error)})
      })
      .then(data => {
        if (data['token']) {
          localStorage.setItem('token', data['token']);
          setIsLoggedIn(true);

          if (savedMovies.length === 0) {
            MainApi.getSavedMovies()
              .then((res) => {
                setSavedMovies(res);
                localStorage.setItem('savedMovies', JSON.stringify(res));
              })
              .catch(console.error);
          }

          navigate('/movies', {replace: true});
        }
      })
      .catch(console.error);
  }

  function handleSignOut() {
    localStorage.clear();
    setIsLoggedIn(false);
  }

  function handleProfileFormSubmit(inputValues) {
    return MainApi.setUserInfo(inputValues)
      .then(setCurrentUser);
  }

  function handleSearchFormSubmit(searchQuery) {
    setSearchQuery(searchQuery);
    localStorage.setItem('searchQuery', searchQuery);
  }

  function handleShortFilmCheckboxChange(event) {
    const checkedState = event.target.checked;

    setIsShortFilm(checkedState);
    localStorage.setItem('isShort', checkedState);
  }

  function filterMovies(rawMovies) {
    return rawMovies.filter((item) => {
      const includesQuery =
        item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(searchQuery.toLowerCase());

      return isShortFilm ? item.duration <= SHORT_MOVIE_LENGTH && includesQuery : includesQuery;
    });
  }

  function handleLikeButtonClick(movieInfo) {
    const movie = savedMovies.find((item) => item.movieId === movieInfo.id);
    if (!movie) {
      MainApi.addSavedMovie(movieInfo)
        .then((res) => {
          setSavedMovies(prevSavedMovies => [...prevSavedMovies, res]);
        })
        .catch(console.error);
    } else {
      MainApi.removeSavedMovie(movie._id)
        .then(() => {
          setSavedMovies((state) => state.filter((m) => m._id === movie._id ? '' : m));
        })
        .catch(console.error);
    }
  }

  function handleDeleteButtonClick(movieInfo) {
    const movie = savedMovies.find((item) => item.movieId === movieInfo.movieId);
    if (movie) {
      MainApi.removeSavedMovie(movie._id)
        .then(() => {
          setSavedMovies((state) => state.filter((m) => m._id === movie._id ? '' : m));
        })
        .catch(console.error);
    } else {
      console.error('Фильм не найден');
    }
  }

  React.useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="/movies" element={
          <ProtectedRoute
            element={Movies}
            isLoggedIn={isLoggedIn}
            searchQuery={searchQuery}
            isShortFilm={isShortFilm}
            onSearchFormSubmit={handleSearchFormSubmit}
            onShortFilmCheckboxChange={handleShortFilmCheckboxChange}
            filterMovies={filterMovies}
            onCardButtonClick={handleLikeButtonClick}
            savedMovies={savedMovies}
          />
        } />
        <Route path="/saved-movies" element={
          <ProtectedRoute
            element={SavedMovies}
            isLoggedIn={isLoggedIn}
            onCardButtonClick={handleDeleteButtonClick}
            savedMovies={savedMovies}
          />
        } />
        <Route path="/profile" element={
          <ProtectedRoute
            element={Profile}
            isLoggedIn={isLoggedIn}
            onSignOut={handleSignOut}
            onUpdateUser={handleProfileFormSubmit}
          />
        } />
        <Route path="/signup" element={<Register submitHandler={handleRegister} />} />
        <Route path="/signin" element={<Login submitHandler={handleLogin} />} />
        <Route path="/*" element={<ProtectedRoute element={NotFound} isLoggedIn={isLoggedIn} />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export { App };
