import React, { createContext, useState, useEffect, useReducer } from 'react';

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/Firebase/firebase.utils';

// import SHOW_DATA from '../show-data';
// import SHOWS from '../shows.json';

export const ShowContext = createContext({
  // showsMap: {}
  allShows: [],
});

const SHOW_ACTION_TYPES = {
  GET_ALL_SHOWS_REQUEST: 'GET_ALL_SHOWS_REQUEST',
  GET_ALL_SHOWS_SUCCESS: 'GET_ALL_SHOWS_SUCCESS',
  GET_ALL_SHOWS_FAIL: 'GET_ALL_SHOWS_FAIL',
  TOGGLE_BOOKMARK: 'TOGGLE_BOOKMARK',
};

const initialState = {
  loading: false,
  allShowsTotal: [],
};

const showReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ACTION_TYPES.GET_ALL_SHOWS_REQUEST:
      return {
        loading: true,
        allShowsTotal: [],
      };
    case SHOW_ACTION_TYPES.GET_ALL_SHOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        allShowsTotal: action.payload,
      };
    case SHOW_ACTION_TYPES.GET_ALL_SHOWS_FAIL:
      return {
        loading: false,
      };
    case SHOW_ACTION_TYPES.TOGGLE_BOOKMARK:
      return {
        ...state,
        allShowsTotal: action.payload
      }
    default:
      return state;
  }
};

export const ShowProvider = ({ children }) => {
  const [state, dispatch] = useReducer(showReducer, initialState);

  // This was run once to populate the firestore db with our data file - SHOW_DATA// Here for demonstration only - no need to run after
  // data has been uploaded once.
  // useEffect(() => {
  //     addCollectionAndDocuments('moviesAndShows', SHOW_DATA)
  // }, [])

  const value = {
    allShowsTotal: state.allShowsTotal,
    loading: state.loading,

    toggleIsBookmarked: (showId) => {
      const alteredShowList = toggleBookmark(showId);
      dispatch({
        type: SHOW_ACTION_TYPES.TOGGLE_BOOKMARK,
        payload: alteredShowList,
      });
    },
  };

  //Bookmark toggle helper function
  const toggleBookmark = (showId) => {
    const updatedShowList = state.allShowsTotal.map((show) => {
      if (show.id === showId) {
        return { ...show, isBookmarked: !show.isBookmarked };
      }
      return show;
    });
    return updatedShowList;
  };

  const fetchShows = async () => {
    dispatch({ type: SHOW_ACTION_TYPES.GET_ALL_SHOWS_REQUEST });
    try {
      const showsArray = await getCategoriesAndDocuments('moviesAndShows');
      const allShowsArray = showsArray[0].items.concat(showsArray[1].items);
      dispatch({
        type: SHOW_ACTION_TYPES.GET_ALL_SHOWS_SUCCESS,
        payload: allShowsArray,
      });
    } catch (error) {
      dispatch({ type: SHOW_ACTION_TYPES.GET_ALL_SHOWS_FAIL });
      console.log('error getting data', error.message);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return <ShowContext.Provider value={value}>{children}</ShowContext.Provider>;
};
