import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SliderProvider } from './store/sliderContext';
import { DisplayProvider } from './store/displayContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DisplayProvider>
      <SliderProvider>
        <App />
      </SliderProvider>
      </DisplayProvider>
    </BrowserRouter>
  </React.StrictMode>
);
