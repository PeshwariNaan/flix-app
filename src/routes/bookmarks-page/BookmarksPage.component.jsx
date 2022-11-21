import React, { Fragment, useState, useContext, useEffect } from 'react';
import { ShowContext } from '../../store/showContext';
import Card from '../../components/card/Card.component';
import DetailsModal from '../../components/UI/DetailsModal';
import { DisplayContext } from '../../store/displayContext';
import SearchBox from '../../components/Search-Box/SearchBox';
import ShowBox from '../../components/show-box-container/ShowBox';
import ResultsBox from '../../components/results-box/ResultsBox';
import {
  BookmarkedShowsMainContainer,
  BookmarkedShowsContainer,
  BookmarkedHeadingsContainer,
} from './bookmarksPage.styles';

const BookmarksPage = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedSeries, setBookmarkedSeries] = useState([]);
  const { bookmarkedShows } = useContext(ShowContext);
  const { isOpen, onHideDetails } = useContext(DisplayContext);

  const divideShowsHandler = () => {
    const bmSeries = [];
    const bmMovies = bookmarkedShows.filter((bmShow) => {
      if (bmShow.category === 'Movie') {
        return bmShow;
      } else {
        bmSeries.push(bmShow);
      }
    });
    setBookmarkedMovies(bmMovies);
    setBookmarkedSeries(bmSeries);
  };

  useEffect(() => {
    divideShowsHandler();
  }, []);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchQuery
      ? setSearchResults(
        bookmarkedShows.filter((show) => {
            return show.title.toLocaleLowerCase().includes(searchQuery);
          })
        )
      : setSearchResults([]);
  };

  const clearInputHandler = () => {
    setSearchQuery('');
    setSearchResults([]);
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
        {searchResults.length === 0 ? (
          <>
            <ShowBox title="Bookmarked Movies" shows={bookmarkedMovies} />
            <ShowBox title="Bookmarked Series" shows={bookmarkedSeries} />
          </>
        ) : (
          <ResultsBox resultText={searchQuery} results={searchResults} />
        )}
        {/* <BookmarkedHeadingsContainer>
          <h1>Bookmarked shows</h1>
        </BookmarkedHeadingsContainer>
        <BookmarkedShowsContainer>
          {allShows.map((show) => {
            return (
              <Card key={show.id} show={show} trending={show.isTrending} />
            );
          })}
        </BookmarkedShowsContainer> */}
        {isOpen && <DetailsModal onClose={onHideDetails} />}
      </BookmarkedShowsMainContainer>
    </Fragment>
  );
};

export default BookmarksPage;
