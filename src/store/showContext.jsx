import React, { createContext, useState } from 'react';

import DATA from '../data.json'

export const ShowContext = createContext({
    allShows: []
});

export const ShowProvider = ({ children }) => {
    const [allShows, setAllShows] = useState(DATA);
    

  const value = {    
   allShows
  };

  return (
    <ShowContext.Provider value={value}>{children}</ShowContext.Provider>
  );
};