import { Fragment } from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import { GlobalStyles } from './theme';

function App() {
  return (
    <Fragment>
      <GlobalStyles />

      <Header />
    </Fragment>
  );
}

export default App;
