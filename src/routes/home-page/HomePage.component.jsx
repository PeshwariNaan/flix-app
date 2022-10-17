import React, { Fragment, useState } from 'react';
import Card from '../../components/card/Card.component';
import Slider from '../../components/flix-slider/slider/slider.component';
import shows from '../../data.json';
import { ShowsContainer } from './homePage.styles';



const HomePage = () => {
  const [trendingShows, setTrendingShows] = useState([])

  const getTrending = () => {
    const trendingFlix = shows.filter((show) => {
      return show.isTrending === true
    })
    setTrendingShows(trendingFlix)
    console.log(trendingShows)
  }

  getTrending()

  return (
    <Fragment>
      <Slider>
        {trendingShows.map((show) => (
          <Slider.Item show={show} key={show.id}>Item one</Slider.Item>
        ))}
      </Slider>
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

