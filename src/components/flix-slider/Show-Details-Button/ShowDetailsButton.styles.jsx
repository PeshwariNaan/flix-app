import styled from 'styled-components';
import { ItemContainer } from '../Item/item.styles';
import { ShowCard } from '../../card/card.styles';

export const DetailsButton = styled.button`
  position: absolute;
  opacity: 0;
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  transition: opacity 500ms ease 100ms;
  background: transparent;
  outline: none;

  @media (max-width: 821px) {
    width: 4rem;
    height: 4rem;
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
  }

  ion-icon {
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
    @media (max-width: 811px) {
      font-size: 4rem;
    }
  }
  ${ItemContainer}:hover & {
    //ItemContainer is for trending shows item
    opacity: 1;
  }
  ${ShowCard}:hover & {
    //ShowCard is general card for shows
    opacity: 1;
  }
`;
