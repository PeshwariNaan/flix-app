import React, { Fragment, useState, useContext } from 'react';
import { ShowContext } from '../../store/showContext';
import { DisplayContext } from '../../store/displayContext';
import DetailsModal from '../../components/UI/DetailsModal';
import SearchBox from '../../components/Search-Box/SearchBox';
import ShowBox from '../../components/show-box-container/ShowBox';
import ResultsBox from '../../components/results-box/ResultsBox';
import ResultsError from '../../components/results-error/ResultsError';
import { SeriesMainContainer } from './seriesPage.styles';

const SeriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchCheck, setSearchCheck] = useState(false);
  const { series } = useContext(ShowContext);
  const { isOpen, onHideDetails } = useContext(DisplayContext);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchCheck(true);
    searchQuery
      ? setSearchResults(
          series.filter((show) => {
            return show.title.toLocaleLowerCase().includes(searchQuery);
          })
        )
      : setSearchResults([]);
  };

  const clearInputHandler = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSearchCheck(false);
  };

  return (
    <Fragment>
      <SeriesMainContainer>
        <SearchBox
          placeholder={'Search for a TV series'}
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
          maxLength={40}
          clearInput={clearInputHandler}
        />
        {searchResults.length === 0 && !searchCheck ? (
          <ShowBox title="TV Series" shows={series} />
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
      </SeriesMainContainer>
    </Fragment>
  );
};

export default SeriesPage;
