import React from 'react';
import Card from '../../components/card/Card.component';
import shows from '../../data.json';

import MovImage from '../../assets/mission-saturn.jpg';
import { ShowsContainer } from './homePage.styles';

const HomePage = () => {
  return (
    <ShowsContainer>
      {shows.map((show) => {
        return (
          <Card
            key={show.id}
            year={show.year}
            rating={show.rating}
            category={show.category}
            title={show.title}
            image={MovImage}
          />
        );
      })}
    </ShowsContainer>
  );
};
export default HomePage;

//<TestDiv><h2 style={{color: 'black'}}>{show.title}</h2></TestDiv>
