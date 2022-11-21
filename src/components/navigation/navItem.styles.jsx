import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  :hover {
    -webkit-filter: hue-rotate(115deg) saturate(0.9) brightness(100%) saturate(4)
      grayscale(0);
    filter: hue-rotate(115deg) saturate(0.9) brightness(100%) saturate(4)
      grayscale(0);
  }

  &.active  
    {
      -webkit-filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
    filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
  } 

  &:active {
    -webkit-filter: hue-rotate(100deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
    filter: hue-rotate(100deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
  }
`;
