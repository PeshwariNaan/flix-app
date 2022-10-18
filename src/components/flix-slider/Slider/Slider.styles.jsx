import styled from 'styled-components';
//import { ItemContainer } from './item.styles';

export const OuterContainer = styled.div`
  display: flex;
  position: relative;

  div {
    display: flex;
    padding: 0 10px;
    transition: transform 300ms ease 100ms;
    z-index: 3;
    width: 100%;
  }
  `;
 

  /* ${ItemContainer}:hover ~ ${ItemContainer}  {
    transform: ${(props) => (props.isOpen ? null : 'translateX(-25%);')};
  } */
/* 
  &:hover ${ItemContainer} + ${ItemContainer}{
    transform: ${(props) => (props.isOpen ? null : 'translateX(25%);')};
  } */


// export const InnerContainer = styled.div`
//   display: flex;
//   padding: 0 10px;
//   transition: transform 300ms ease 100ms;s
//   z-index: 3;
//   width: 100%;
// `;
// &:not(&--open):hover .item {
//     transform: translateX(-25%);
//   }

//   &:not(&--open) .item:hover ~ .item {
//     transform: translateX(25%);
//   }
