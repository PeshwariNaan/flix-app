import React, { Fragment, useState, useContext } from 'react';
import { ShowContext } from '../../store/showContext';

import DetailsModal from '../../components/UI/DetailsModal';
import { DisplayContext } from '../../store/displayContext';
import SearchBox from '../../components/Search-Box/SearchBox';
import ShowBox from '../../components/show-box-container/ShowBox';
import ResultsBox from '../../components/results-box/ResultsBox';
import { MoviesMainContainer } from './moviesPage.styles';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { movies } = useContext(ShowContext);

  const { isOpen, onHideDetails } = useContext(DisplayContext);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchQuery
      ? setSearchResults(
          movies.filter((show) => {
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
      <MoviesMainContainer>
        <SearchBox
          placeholder={'Search for movies or TV series'}
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
          maxLength={40}
          clearInput={clearInputHandler}
        />
        {searchResults.length === 0 ? (
          <ShowBox title="Movies" shows={movies} />
        ) : (
          <ResultsBox resultText={searchQuery} results={searchResults} />
        )}

        {isOpen && <DetailsModal onClose={onHideDetails} />}
      </MoviesMainContainer>
    </Fragment>
  );
};

export default MoviesPage;
