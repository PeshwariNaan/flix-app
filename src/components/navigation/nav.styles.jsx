import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  position: fixed;
  top: 2%;
  left: 1.5%;
  flex-direction: column;
  width: 10rem;
  height: 96vh;
  background-color: var(--bg-ele);
  border-radius: 1.5rem;
  align-items: center;

  @media (max-width: 900px) {
    position: relative;
    flex-direction: row;
    width: 96vw;
    height: 8rem;
    margin-top: 2rem ;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    top: 1rem;
    height: 6rem;
    margin-top: .5rem;
  }

  NavLink {
 &.active,
  :focus
    {
      -webkit-filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
    filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
  }
  }
`;

export const IconImage = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  /* &:hover {
    -webkit-filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
    filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
  } */
  @media (max-width: 600px) {
    height: 1.75rem;
    width: 1.75rem;
  }
  /* &.active,
  :focus
    {
    border-bottom: 2px solid #ffffff;
  } */
`;

export const FlixIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 20%;
  @media (max-width: 900px) {
    flex-direction: row;
    width: 10rem;
    height: 100%;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 600px) {
    flex-direction: row;
    width: 5rem;
    
  }
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 25%;
  @media (max-width: 900px) {
    flex-direction: row;
    width: 35%;
    min-width: 15rem;
    height: 100%;
    flex-direction: row;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 55%;
  width: 100%;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    flex-direction: row;
    width: 5rem;
    height: 5rem;
    flex-direction: row;
    margin: 0 1rem 0 0;
  }
  @media (max-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const AvatarImg = styled.img`
  height: 5rem;
  width: 5rem;
  //margin-bottom: 3rem;
  @media (max-width: 600px) {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

export const FlixIcon = styled.img`
  width: 3rem;
  height: 2.5rem;
  margin-top: 2rem;
  @media (max-width: 900px) {
    margin-top: 0;
  }
  @media (max-width: 600px) {
    width: 2.5rem;
    height: 2rem;
  }
`;
