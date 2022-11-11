import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
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
          <Route path='/' element={<HomePage />} />          
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
