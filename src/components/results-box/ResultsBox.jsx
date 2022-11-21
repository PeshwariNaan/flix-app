import React, { Fragment } from 'react';
import Card from '../card/Card.component';
import { ResultsContainer, HeadingsContainer } from './resultsBox.styles';

const ResultsBox = ({ resultText, results }) => {
  return (
    <Fragment>
      <HeadingsContainer>
        <h1>Showing results for '{resultText}'</h1>
      </HeadingsContainer>
      <ResultsContainer>
        {results.map((show) => {
          return (
            <Card
              key={show.id}
              show={show}
              trending={show.isTrending}
              bookmarked={show.isBookmarked}
            />
          );
        })}
      </ResultsContainer>
    </Fragment>
  );
};

export default ResultsBox;
