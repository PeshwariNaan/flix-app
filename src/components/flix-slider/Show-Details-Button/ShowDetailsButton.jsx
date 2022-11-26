import React from 'react';
import { DetailsButton } from './ShowDetailsButton.styles';

const ShowDetailsButton = ({ onClick }) => (
  <DetailsButton onClick={onClick}>
    <ion-icon name="chevron-down"></ion-icon>
  </DetailsButton>
);

export default ShowDetailsButton;
