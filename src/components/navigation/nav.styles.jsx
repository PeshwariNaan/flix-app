import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: ${(props) => (props.user ? 'flex' : 'none')};
  position: fixed;
  top: 2%;
  left: 1.5%;
  flex-direction: column;
  width: 10rem;
  height: 96vh;
  background-color: var(--bg-ele);
  border-radius: 1.5rem;
  align-items: center;

  span {
    color: var(--white);
    font-size: var(--body-med);
  }

  @media (max-width: 900px) {
    position: relative;
    flex-direction: row;
    width: 96vw;
    height: 8rem;
    margin-top: 2rem;
    justify-content: space-between;
    span {
      font-size: var(--body-small);
    }
  }
  @media (max-width: 600px) {
    top: 1rem;
    height: 6rem;
    margin-top: 0.5rem;
    span {
      font-size: var(--body-small);
    }
  }
`;

export const IconImage = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  @media (max-width: 600px) {
    height: 1.75rem;
    width: 1.75rem;
  }
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
  }
  @media (max-width: 600px) {
    min-width: 10rem;
    height: 100%;
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
    width: 15rem;
    height: 5rem;
    flex-direction: row;
    margin: 0 1rem 0 0;
  }
  @media (max-width: 600px) {
    width: 10rem;
    
  }
`;

export const AvatarImg = styled.img`
  height: 5rem;
  width: 5rem;
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

export const SignOutLink = styled(Link)`
  padding: 1rem;
  cursor: pointer;
`;
