import React, { createContext, useState, useEffect } from 'react';

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/Firebase/firebase.utils';

import SHOW_DATA from '../show-data';
import SHOWS from '../shows.json';

export const ShowContext = createContext({
  // showsMap: {}
  allShows: [],
});

export const ShowProvider = ({ children }) => {
  const [allShows, setAllShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [bookmarkedShows, setBookmarkedShows] = useState([])  

  // This was run once to populate the firestore db with our data file - SHOW_DATA// Here for demonstration only - no need to run after
  // data has been uploaded once.
  // useEffect(() => {
  //     addCollectionAndDocuments('moviesAndShows', SHOW_DATA)
  // }, [])

  useEffect(() => {
    const getShowsArray = async () => {
      const showsArray = await getCategoriesAndDocuments('moviesAndShows');
      
      const allShowsArray = showsArray[0].items.concat(showsArray[1].items);
      const moviesArray = showsArray[0].items;
      const seriesArray = showsArray[1].items;
      setAllShows(allShowsArray);
      setMovies(moviesArray);
      setSeries(seriesArray);
      const bookmarkedShows = allShowsArray.filter((show) => {
        if(show.isBookmarked === true){
          return show
        }else{
          return false
        }
      })
      setBookmarkedShows(bookmarkedShows)
      console.log(bookmarkedShows)
    };
    getShowsArray();
  }, []);

  const value = {
    allShows,
    movies,
    series,
    bookmarkedShows
  };

  return <ShowContext.Provider value={value}>{children}</ShowContext.Provider>;
};
