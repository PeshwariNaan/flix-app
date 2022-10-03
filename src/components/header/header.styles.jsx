import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 2%;
  left: 1.5%;
  flex-direction: column;
  width: 10rem;
  height: 96vh;
  background-color: var(--bg-ele);
  margin: auto 0 auto 0;
  border-radius: 1.5rem;
  align-items: center;
`;

export const IconImage = styled.img`
  width: 3rem;
  height: 3rem;
  @media (max-width: 650px) {
    height: 2rem;
    width: 2rem;
  }
`;

export const FlixIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30%;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25%;
  width: 100%;
`;

export const AvatarImg = styled.image`
  height: 2rem;
  width: 2rem;
`

export const FlixIcon = styled.img`
  width: 3rem;
  height: 3rem;
  @media (max-width: 650px) {
    height: 2rem;
    width: 2rem;
  }
`;
