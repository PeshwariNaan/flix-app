import React, { Fragment, useState, useEffect } from 'react';
import Card from '../../components/card/Card.component';
import Item from '../../components/flix-slider/Item/Item';
import Slider from '../../components/flix-slider/Slider/Slider';
import shows from '../../data.json';
import { ShowsContainer, TrendingContainer } from './homePage.styles';

const HomePage = () => {
  const [trendingShows, setTrendingShows] = useState([]);

  const getTrending = () => {
    const trendingFlix = shows.filter((show) => {
      return show.isTrending === true;
    });
    setTrendingShows(trendingFlix);
    console.log(trendingShows);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <Fragment>
      <TrendingContainer>
        <Slider>
          {shows.map((show) => (
            <Item show={show} key={show.id} />
          ))}
        </Slider>
      </TrendingContainer>
      <ShowsContainer>
        {shows.map((show) => {
          return (
            <Card
              key={show.id}
              year={show.year}
              rating={show.rating}
              category={show.category}
              title={show.title}
              image={show.thumbnail.regular.medium}
            />
          );
        })}
      </ShowsContainer>
    </Fragment>
  );
};
export default HomePage;
