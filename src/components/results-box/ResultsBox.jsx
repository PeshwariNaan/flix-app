import React, { Fragment } from 'react';
import Card from '../card/Card.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { ResultsContainer, HeadingsContainer } from './resultsBox.styles';

const ResultsBox = ({ resultText, results, exitResults }) => {
  return (
    <Fragment>
      <HeadingsContainer>
        <h1>Showing results for '{resultText}'</h1>

        <Button
          buttonType={BUTTON_TYPE_CLASSES.exit}
          type="button"
          onClick={exitResults}
        >
          EXIT
        </Button>
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
