import React from 'react';
import IconArrowDown from './../Icons/IconArrowDown';
import { DetailsButton } from './ShowDetailsButton.styles';
//import './ShowDetailsButton.scss'

const ShowDetailsButton = ({ onClick }) => (
  <DetailsButton onClick={onClick}>
    <span>
      <ion-icon name="chevron-down"></ion-icon>
    </span>
  </DetailsButton>
);

export default ShowDetailsButton;
