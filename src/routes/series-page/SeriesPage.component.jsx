import React, { Fragment, useState, useContext } from 'react';
import { ShowContext } from '../../store/showContext';
import Card from '../../components/card/Card.component';
import DetailsModal from '../../components/UI/DetailsModal';
import { DisplayContext } from '../../store/displayContext';
import SearchBox from '../../components/Search-Box/SearchBox';
import {
  SeriesMainContainer,
  SeriesContainer,
  SeriesHeadingsContainer,
  ResultsContainer,
} from './seriesPage.styles';

const SeriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { series } = useContext(ShowContext);

  const { isOpen, onHideDetails } = useContext(DisplayContext);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchQuery
      ? setSearchResults(
          series.filter((show) => {
            return show.title.toLocaleLowerCase().includes(searchQuery);
          })
        )
      : setSearchResults([]);
  };

  return (
    <Fragment>
      <SeriesMainContainer>
        <SearchBox
          placeholder={'Search for movies or TV series'}
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
        />
        {searchResults.length === 0 ? (
          <>
            {' '}
            <SeriesHeadingsContainer>
              <h1>TV Series</h1>
            </SeriesHeadingsContainer>
            <SeriesContainer>
              {series.map((show) => {
                return (
                  <Card key={show.id} show={show} trending={show.isTrending} />
                );
              })}
            </SeriesContainer>
          </>
        ) : (
          <>
            <ResultsContainer>
              {searchResults.map((show) => {
                return (
                  <Card key={show.id} show={show} trending={show.isTrending} />
                );
              })}
            </ResultsContainer>
          </>
        )}

        {isOpen && <DetailsModal onClose={onHideDetails} />}
      </SeriesMainContainer>
    </Fragment>
  );
};

export default SeriesPage;
