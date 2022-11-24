import React, { Fragment, useState, useContext } from 'react';
import { ShowContext } from '../../store/showContext';
import { SliderProvider } from '../../store/sliderContext';
import Card from '../../components/card/Card.component';
import Item from '../../components/flix-slider/Item/Item';
import Slider from '../../components/flix-slider/Slider/Slider';
import DetailsModal from '../../components/UI/DetailsModal';
import { DisplayContext } from '../../store/displayContext';
import SearchBox from '../../components/Search-Box/SearchBox';
import ResultsBox from '../../components/results-box/ResultsBox';
import {
  HeadingsContainer,
  MainShowContainer,
  ShowsContainer,
  TrendingContainer,
} from './homePage.styles';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { allShows } = useContext(ShowContext);

  const { isOpen, onHideDetails } = useContext(DisplayContext);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchQuery
      ? setSearchResults(
          allShows.filter((show) => {
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
      <MainShowContainer>
        <SearchBox
          placeholder={'Search for movies or TV series'}
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
          handleSearchSubmit={handleSearchSubmit}
          clearInput={clearInputHandler}
          maxLength={40}
        />
        {searchResults.length === 0 ? (
          <Fragment>
            <HeadingsContainer>
              <h1>Trending</h1>
            </HeadingsContainer>
            <TrendingContainer>
              <SliderProvider>
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
              </SliderProvider>
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
                      bookmarked={show.isBookmarked}
                    />
                  );
                })}
            </ShowsContainer>
          </Fragment>
        ) : (
          <ResultsBox resultText={searchQuery} results={searchResults} exitResults={clearInputHandler} />
        )}
        {isOpen && <DetailsModal onClose={onHideDetails} />}
      </MainShowContainer>
    </Fragment>
  );
};
export default HomePage;
