import { Fragment, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './store/userContext';
import MoviesPage from './routes/movies-page/MoviesPage.component';
import SeriesPage from './routes/series-page/SeriesPage.component';
import HomePage from './routes/home-page/HomePage.component';
import BookmarksPage from './routes/bookmarks-page/BookmarksPage.component';
import Nav from './components/navigation/Nav.component';
import ProtectedRoute from './routes/protected-route/ProtectedRoute.component';
import Authentication from './routes/authentication-page/Authentication.component';
import { GlobalStyles } from './theme';
import './App.css';

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <GlobalStyles />
      <main>
        <Nav hasUser={currentUser} />
        <Routes>
          <Route path="authenticate" element={<Authentication />} />
          <Route element={<ProtectedRoute user={currentUser} />}>
            <Route path="home" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="tvseries" element={<SeriesPage />} />
            <Route path="bookmarks" element={<BookmarksPage />} />
            <Route path="*" element={<h1>There is nothing here: 404</h1>} />
          </Route>
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
