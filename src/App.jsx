import { Fragment, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './store/userContext';
import MoviesPage from './routes/movies-page/MoviesPage.component';
import SeriesPage from './routes/series-page/SeriesPage.component';
import HomePage from './routes/home-page/HomePage.component';
import Nav from './components/navigation/Nav.component';
import ProtectedRoute from './routes/protected-route/ProtectedRoute.component';
import Authentication from './routes/sign-in/Authentication.component';
import { GlobalStyles } from './theme';
import './App.css';

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <GlobalStyles />
      <main>
        <Nav />
        <Routes>
          <Route index element={<Authentication />} />
          <Route path="authentication" element={<Authentication />} />
          <Route element={<ProtectedRoute user={currentUser} />}>            
            <Route index element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="tvseries" element={<SeriesPage />} />

            <Route path="*" element={<h1>There is nothing here: 404</h1>} />
          </Route>
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
