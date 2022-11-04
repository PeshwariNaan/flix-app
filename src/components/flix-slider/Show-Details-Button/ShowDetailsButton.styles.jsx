import styled from 'styled-components';
import { ItemContainer } from '../Item/item.styles';
import {ShowCard} from '../../card/card.styles'

export const DetailsButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 300ms ease 100ms;
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;

  span {
    display: block;
    width: 14px;
    margin: 0 auto;
    color: white;
  }
  ion-icon {
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    transition: all 1s linear;
  }
  ${ItemContainer}:hover & { //ItemContainer is for trending shows item
    opacity: 1;
  }
  ${ShowCard}:hover & { //ShowCard is general card for shows
    opacity: 1;
  }
`;
