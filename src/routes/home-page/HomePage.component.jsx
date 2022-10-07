import React, { Fragment } from 'react';
import Card from '../../components/card/Card.component';
import shows from '../../data.json';
import MovImage from '../../assets/mission-saturn.jpg';

import { ShowsContainer } from './homePage.styles';



const HomePage = () => {
  return (
    <Fragment>
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

