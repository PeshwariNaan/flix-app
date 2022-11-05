import React, { Fragment, useState } from 'react';
import Card from '../../components/card/Card.component';
import Item from '../../components/flix-slider/Item/Item';
import Slider from '../../components/flix-slider/Slider/Slider';
import shows from '../../data.json';
import {
  HeadingsContainer,
  ShowsContainer,
  TrendingContainer,
} from './homePage.styles';

const HomePage = () => {
  const [trendingShows, setTrendingShows] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Fragment>
      <HeadingsContainer>
        <h1>Trending</h1>
      </HeadingsContainer>
      <TrendingContainer>
        <Slider>
          {shows
            .filter((show) => {
              if (show.isTrending === true) {
                return show;
              }
              return false;
            })
            .map((show) => (
              <Item show={show} key={show.id} trending={show.isTrending} />
            ))}
        </Slider>
      </TrendingContainer>
      <HeadingsContainer>
        <h1>Recommended for you</h1>
      </HeadingsContainer>
      <ShowsContainer>
        {shows
          .filter((show) => {
            if (show.isTrending !== true) {
              return show;
            }
            return false;
          })
          .map((show) => {
            return (
              <Card key={show.id} show={show} trending={show.isTrending} />
            );
          })}
      </ShowsContainer>
    </Fragment>
  );
};
export default HomePage;
