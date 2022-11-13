import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviesPage from './routes/movies-page/MoviesPage.component';
import SeriesPage from './routes/series-page/SeriesPage.component';
import HomePage from './routes/home-page/HomePage.component';
import Nav from './components/navigation/Nav.component';
import SignIn from './routes/sign-in/SignIn.component';
import { GlobalStyles } from './theme';
import './App.css';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <main>
        <Nav />
        <Routes>
          <Route path="/flix" element={<Nav />} />
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path='tvseries' element={<SeriesPage />} />
          <Route path='signin-signup' element={<SignIn />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
