import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import { SliderProvider } from './store/sliderContext';
import { DisplayProvider } from './store/displayContext';
import { ShowProvider } from './store/showContext';
import { UserProvider } from './store/userContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ShowProvider>
          <DisplayProvider>
            <App />
          </DisplayProvider>
        </ShowProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
