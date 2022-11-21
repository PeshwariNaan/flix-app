import React from 'react';
import { Fragment } from 'react';
import Card from '../card/Card.component';
import { HeadingsContainer, ShowBoxContainer } from './showBox.styles';

const ShowBox = ({ title, shows }) => {
  return (
    <Fragment>
      <HeadingsContainer>
        <h1>{title}</h1>
      </HeadingsContainer>
      <ShowBoxContainer>
        {shows.map((show) => {
          return (
            <Card
              key={show.id}
              show={show}
              trending={show.isTrending}
              bookmarked={show.isBookmarked}
            />
          );
        })}
      </ShowBoxContainer>
    </Fragment>
  );
};

export default ShowBox;
