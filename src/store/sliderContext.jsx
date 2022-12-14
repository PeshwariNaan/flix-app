import React, { createContext, useState } from 'react';
import useSizeElement from '../hooks/useSizeElement.hook';

export const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width, elementRef } = useSizeElement();  //This is giving the width of the Item component
  

  const showDetailsHandler = (movie) => {
    setCurrentSlide(movie);
    setIsOpen(true);
  };

  const closeDetailsHandler = () => {
    setCurrentSlide(null);
    setIsOpen(false);
  };

 const value = {
    onShowDetails: showDetailsHandler,
    onHideDetails: closeDetailsHandler,
    elementRef,
    width,
    isOpen,
 };

  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
};
