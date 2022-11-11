import React, { Fragment, useState, useContext } from 'react';
import { ShowContext } from '../../store/showContext';
import Card from '../../components/card/Card.component';
import DetailsModal from '../../components/UI/DetailsModal';
import { DisplayContext } from '../../store/displayContext';
import SearchBox from '../../components/Search-Box/SearchBox';
import { SeriesMainContainer, SeriesContainer, SeriesHeadingsContainer } from './seriesPage.styles';

const SeriesPage = () => {
    const [searchField, setSearchField] = useState([]);
    const { series } = useContext(ShowContext);
  
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
        <SeriesMainContainer>
          <SearchBox
            placeholder={'Search for TV series'}
            value={searchField}
            onChangeHandler={searchMoviesAndShows}
          />
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
          {isOpen && <DetailsModal onClose={onHideDetails} />}
        </SeriesMainContainer>
      </Fragment>
    );
  };

export default SeriesPage;
