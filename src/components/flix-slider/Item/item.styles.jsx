import styled from 'styled-components';

export const ItemContainer = styled.div`
  flex: 0 0 30%;
  transition: transform 300ms ease 100ms;
  margin: 0 2px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  &:hover {
    transform: ${(props) => (props.isOpen ? null : 'scale(1.5)')} !important;
  }
  
  /* &:not(open):hover ~ & {
    transform: ${(props) =>
      ((props.isOpen) ? null : 'translateX(-25%);')};
  } */

  &:hover ~ &{
    transform: ${(props) => ( (props.isOpen) ? null : 'translateX(25%);')};
  }
`;
