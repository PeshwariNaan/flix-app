import React, { Fragment, useState, useContext } from 'react';
import { ShowContext } from '../../store/showContext';
import Card from '../../components/card/Card.component';
import Item from '../../components/flix-slider/Item/Item';
import Slider from '../../components/flix-slider/Slider/Slider';
import DetailsModal from '../../components/UI/DetailsModal';
import { DisplayContext } from '../../store/displayContext';
import SearchBox from '../../components/Search-Box/SearchBox';
import {
  HeadingsContainer,
  MainShowContainer,
  ShowsContainer,
  TrendingContainer,
} from './homePage.styles';

const HomePage = () => {
  const [searchedShows, setSearchedShows] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchField, setSearchField] = useState([]);
  const { allShows } = useContext(ShowContext)

  const { isOpen, onHideDetails } = useContext(DisplayContext);

  const searchMoviesAndShows = (e) => {
    const searchFieldItems = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldItems);
    const searchedData = allShows.filter((show) => {
      return show.title.toLocaleLowerCase().includes(searchField);
    });
    setSearchedShows(searchedData);
  };

  return (
    <Fragment>
      <SearchBox
        placeholder={'Search for movies or TV series'}
        value={searchField}
        onChangeHandler={searchMoviesAndShows}
      />
      <MainShowContainer>
        {searchField.length === 0 ? (
          <Fragment>
            <HeadingsContainer>
              <h1>Trending</h1>
            </HeadingsContainer>
            <TrendingContainer>
              <Slider>
                {allShows
                  .filter((show) => {
                    if (show.isTrending === true) {
                      return show;
                    }
                    return false;
                  })
                  .map((show) => (
                    <Item
                      show={show}
                      key={show.id}
                      trending={show.isTrending}
                    />
                  ))}
              </Slider>
            </TrendingContainer>
            <HeadingsContainer>
              <h1>Recommended for you</h1>
            </HeadingsContainer>
            <ShowsContainer>
              {allShows
                .filter((show) => {
                  if (show.isTrending !== true) {
                    return show;
                  }
                  return false;
                })
                .map((show) => {
                  return (
                    <Card
                      key={show.id}
                      show={show}
                      trending={show.isTrending}
                    />
                  );
                })}
            </ShowsContainer>
          </Fragment>
        ) : (
          <ShowsContainer>
            {searchedShows.map((show) => (
              <Card key={show.id} show={show} trending={show.isTrending} />
            ))}
          </ShowsContainer>
        )}
        {isOpen && <DetailsModal onClose={onHideDetails} />}
      </MainShowContainer>
    </Fragment>
  );
};
export default HomePage;
