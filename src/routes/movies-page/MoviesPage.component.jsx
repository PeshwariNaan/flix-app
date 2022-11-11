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
} from './moviesPage.styles';

const MoviesPage = () => {
  const [searchField, setSearchField] = useState([]);
  const { movies } = useContext(ShowContext);

  const { isOpen, onHideDetails } = useContext(DisplayContext);

  const searchMoviesAndShows = (e) => {
    const searchFieldItems = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldItems);
    const searchedData = movies.filter((show) => {
      return show.title.toLocaleLowerCase().includes(searchField);
    });
    setSearchedShows(searchedData);
  };
  return (
    <Fragment>
      <MoviesMainContainer>
        <SearchBox
          placeholder={'Search for movies'}
          value={searchField}
          onChangeHandler={searchMoviesAndShows}
        />
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
        {isOpen && <DetailsModal onClose={onHideDetails} />}
      </MoviesMainContainer>
    </Fragment>
  );
};

export default MoviesPage;
