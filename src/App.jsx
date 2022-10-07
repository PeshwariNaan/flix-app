import { Fragment } from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/home-page/HomePage.component';
import './App.css';
import Nav from './components/navigation/Nav.component';
import { GlobalStyles } from './theme';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
