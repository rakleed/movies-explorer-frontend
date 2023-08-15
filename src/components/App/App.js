import { Route, Routes } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import { Navigation } from '../Navigation/Navigation';
import { Preloader } from '../Movies/Preloader/Preloader';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/saved-movies" element={<SavedMovies />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/navigation" element={<Navigation />}></Route> {/* temporary, TODO: should be removed */}
        <Route path="/preloader" element={<Preloader />}></Route> {/* temporary, TODO: should be removed */}
      </Routes>
  );
}

export { App };
