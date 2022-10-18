import React, { createContext, useState } from 'react';
import useSizeElement from '../hooks/useSizeElement.hook';

export const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { width, elementRef } = useSizeElement();  //This is giving the width of the Item component
  // console.log('width', width, 'elementRef', elementRef)
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
    currentSlide,
    width,
    isOpen,
  };

  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
};
