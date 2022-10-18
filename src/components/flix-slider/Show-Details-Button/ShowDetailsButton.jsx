import React from 'react';
import { DetailsButton } from './ShowDetailsButton.styles';


const ShowDetailsButton = ({ onClick }) => (
  <DetailsButton onClick={onClick}>
    <span>
      <ion-icon name="chevron-down"></ion-icon>
    </span>
  </DetailsButton>
);

export default ShowDetailsButton;
