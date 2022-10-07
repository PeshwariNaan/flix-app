import styled from 'styled-components';

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
`;

export const IconImage = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
    -webkit-filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
    filter: hue-rotate(10deg) saturate(0.5) brightness(390%) saturate(4)
      grayscale(1);
  }
  /* @media (max-width: 650px) {
    height: 2rem;
    width: 2rem;
  } */
`;

export const FlixIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 20%;
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 25%;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 55%;
  width: 100%;
`;

export const AvatarImg = styled.img`
  height: 5rem;
  width: 5rem;
  margin-bottom: 3rem;
`

export const FlixIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-top: 2rem;
  /* @media (max-width: 650px) {
    height: 2rem;
    width: 2rem;
  } */
`;
