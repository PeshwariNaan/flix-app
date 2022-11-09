import React, { createContext, useState } from 'react';

export const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const showDetailsHandler = (movie) => {
    setCurrentSlide(movie);
    console.log('showDetailsHandler clicked', {movie});
    setIsOpen(true);
  };

  const closeDetailsHandler = () => {
    setCurrentSlide(null);
    setIsOpen(false);
  };

  const value = {    
    onShowDetails: showDetailsHandler,
    onHideDetails: closeDetailsHandler,
    isOpen,
    currentSlide
  };

  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  );
};
