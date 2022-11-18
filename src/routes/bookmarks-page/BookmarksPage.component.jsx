import React, { Fragment, useState, useContext } from 'react';
import { ShowContext } from '../../store/showContext';
import Card from '../../components/card/Card.component';
import DetailsModal from '../../components/UI/DetailsModal';
import { DisplayContext } from '../../store/displayContext';
import SearchBox from '../../components/Search-Box/SearchBox';
import {
  BookmarkedShowsMainContainer,
  BookmarkedShowsContainer,
  BookmarkedHeadingsContainer,
} from './bookmarksPage.styles';

const BookmarksPage = (props) => {
  const [searchField, setSearchField] = useState([]);
  const { allShows } = useContext(ShowContext);

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
      <BookmarkedShowsMainContainer>
        <SearchBox
          placeholder={'Search for bookmarked shows'}
          value={searchField}
          onChangeHandler={searchMoviesAndShows}
        />
        <BookmarkedHeadingsContainer>
          <h1>Bookmarked shows</h1>
        </BookmarkedHeadingsContainer>
        <BookmarkedShowsContainer>
          {allShows.map((show) => {
            return (
              <Card key={show.id} show={show} trending={show.isTrending} />
            );
          })}
        </BookmarkedShowsContainer>
        {isOpen && <DetailsModal onClose={onHideDetails} />}
      </BookmarkedShowsMainContainer>
    </Fragment>
  );
};

export default BookmarksPage;
