import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SliderProvider } from './store/sliderContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SliderProvider>
        <App />
      </SliderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
