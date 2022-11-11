import React, { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/Firebase/firebase.utils';

import SHOW_DATA from '../show-data'
import SHOWS from '../shows.json'

export const ShowContext = createContext({
    // showsMap: {}
    allShows: []
});

export const ShowProvider = ({ children }) => {
    const [allShows, setAllShows] = useState([]);
    const [shows, setShows] = useState(SHOWS)

    // This was run once to populate the firestore db with our data file - SHOW_DATA// Here for demonstration only - no need to run after
    // data has been uploaded once.
    // useEffect(() => {
    //     addCollectionAndDocuments('moviesAndShows', SHOW_DATA)
    // }, [])

    useEffect(() => {
        const getShowsArray = async () => {
            const showsArray = await getCategoriesAndDocuments()
            console.log(showsArray)
            const allShowsArray = showsArray[0].items.concat(showsArray[1].items)
            console.log('testArray', allShowsArray)
            setAllShows(allShowsArray)
        }
        getShowsArray()
    }, [])

  // const value = {    
  //  showsMap
  // };

const value = {
    shows, 
    allShows
}



  return (
    <ShowContext.Provider value={value}>{children}</ShowContext.Provider>
  );
};