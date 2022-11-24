import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { ErrorContainer } from './resultsError.styles';

const ResultsError = ({ query, exitResults }) => {
  return (
    <ErrorContainer>
      <h1>
        Sorry, there is nothing here for <span>'{query}'</span>
      </h1>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.exit}
        type="button"
        onClick={exitResults}
      >
        EXIT
      </Button>
    </ErrorContainer>
  );
};

export default ResultsError;
