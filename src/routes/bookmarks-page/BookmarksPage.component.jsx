import React, { Fragment, useState, useContext, useEffect } from 'react';
import { ShowContext } from '../../store/showContext';
import ResultsError from '../../components/results-error/ResultsError';
import DetailsModal from '../../components/UI/DetailsModal';
import { DisplayContext } from '../../store/displayContext';
import SearchBox from '../../components/Search-Box/SearchBox';
import ShowBox from '../../components/show-box-container/ShowBox';
import ResultsBox from '../../components/results-box/ResultsBox';
import {
  BookmarkedShowsMainContainer,
} from './bookmarksPage.styles';

const BookmarksPage = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allBookmarkedShows, setAllBookmarkedShows] = useState([])
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedSeries, setBookmarkedSeries] = useState([]);
  const [searchCheck, setSearchCheck] = useState(false);
  const { allShowsTotal } = useContext(ShowContext);
  const { isOpen, onHideDetails } = useContext(DisplayContext);

  const getBookmarksData = () => {
    const bkMovies = []
    const bkSeries = []
    const bkAll = []
    allShowsTotal.filter((show) => {
      if(show.isBookmarked === true && show.category === 'Movie'){
        bkMovies.push(show) && bkAll.push(show)
      }if(show.isBookmarked === true && show.category === 'TV Series'){
        bkSeries.push(show) && bkAll.push(show)
      }
      
    })
    setAllBookmarkedShows(bkAll)
    setBookmarkedMovies(bkMovies)
    setBookmarkedSeries(bkSeries)
  }

  useEffect(() => {
    getBookmarksData()
  }, [allShowsTotal]);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchCheck(true)
    searchQuery
      ? setSearchResults(
        allBookmarkedShows.filter((show) => {
            return show.title.toLocaleLowerCase().includes(searchQuery);
          })
        )
      : setSearchResults([]);
  };

  const clearInputHandler = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSearchCheck(false)
  };
  return (
    <Fragment>
      <BookmarkedShowsMainContainer>
        <SearchBox
          placeholder={'Search bookmarked shows'}
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
          maxLength={40}
          clearInput={clearInputHandler}
        />
        {searchResults.length === 0 && !searchCheck ? (
          <>
            <ShowBox title="Bookmarked Movies" shows={bookmarkedMovies} />
            <ShowBox title="Bookmarked Series" shows={bookmarkedSeries} />
          </>
        ) : searchCheck && searchResults.length === 0 ? (
          <ResultsError query={searchQuery} exitResults={clearInputHandler} />
        ) : (
          <ResultsBox
            resultText={searchQuery}
            results={searchResults}
            exitResults={clearInputHandler}
          />
        )}
        {isOpen && <DetailsModal onClose={onHideDetails} />}
      </BookmarkedShowsMainContainer>
    </Fragment>
  );
};

export default BookmarksPage;
