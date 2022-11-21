import React, { Fragment, useState, useContext } from 'react';
import { ShowContext } from '../../store/showContext';
import Card from '../../components/card/Card.component';
import DetailsModal from '../../components/UI/DetailsModal';
import { DisplayContext } from '../../store/displayContext';
import SearchBox from '../../components/Search-Box/SearchBox';
import {
  MoviesMainContainer,
  MovieHeadingsContainer,
  MoviesContainer,
  ResultsContainer
} from './moviesPage.styles';

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

  return (
    <Fragment>
      <MoviesMainContainer>
        <SearchBox
          placeholder={'Search for movies or TV series'}
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
        />
        {searchResults.length === 0 ? (
          <>
            <MovieHeadingsContainer>
              <h1>Movies</h1>
            </MovieHeadingsContainer>
            <MoviesContainer>
              {movies.map((show) => {
                return (
                  <Card key={show.id} show={show} trending={show.isTrending} />
                );
              })}
            </MoviesContainer>
          </>
        ) : (
          <ResultsContainer>
            {searchResults.map((show) => {
              return (
                <Card key={show.id} show={show} trending={show.isTrending} />
              );
            })}
          </ResultsContainer>
        )}

        {isOpen && <DetailsModal onClose={onHideDetails} />}
      </MoviesMainContainer>
    </Fragment>
  );
};

export default MoviesPage;
