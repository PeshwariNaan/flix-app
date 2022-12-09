import React, { Fragment, useState, useContext, useEffect } from 'react';
import { ShowContext } from '../../store/showContext';
import { DisplayContext } from '../../store/displayContext';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/Button';
import DetailsModal from '../../components/UI/DetailsModal';
import SearchBox from '../../components/Search-Box/SearchBox';
import ShowBox from '../../components/show-box-container/ShowBox';
import ResultsBox from '../../components/results-box/ResultsBox';
import ResultsError from '../../components/results-error/ResultsError';
import { MoviesMainContainer } from './moviesPage.styles';
import Loader from '../../components/loader/Loader';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchCheck, setSearchCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const { allShowsTotal } = useContext(ShowContext);

  const { isOpen, onHideDetails } = useContext(DisplayContext);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
  };

  const getMoviesData = () => {
    setIsLoading(true);
    const movieData = [];
    allShowsTotal.filter((show) => {
      if (show.category === 'Movie') {
        movieData.push(show);
      }
    });
    setMovies(movieData);
    setIsLoading(false);
  };

  useEffect(() => {
    getMoviesData();
  }, [allShowsTotal]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchCheck(true);
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
    setSearchCheck(false);
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Fragment>
        <MoviesMainContainer>
          <SearchBox
            placeholder={'Search for Movies'}
            searchQuery={searchQuery}
            handleSearchQuery={handleSearchQuery}
            handleSearchSubmit={handleSearchSubmit}
            maxLength={40}
            clearInput={clearInputHandler}
          />
          {searchResults.length === 0 && !searchCheck ? (
            <ShowBox title="Movies" shows={movies} />
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
        </MoviesMainContainer>
      </Fragment>
    );
  }
};

export default MoviesPage;
