import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
  `;

export const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const OverLayDiv = styled.div`
  position: fixed;
  top: 15vh;
  left: 30%;
  width: 40%;
  background-color: var(--bg-ele);
  //padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideDown} 800ms ease-out forwards;

  img {
    aspect-ratio: 3.3 / 2;
    object-fit: contain;
    min-width: 100%;    
    border-radius: 1rem;
  }
  h1{
    color: black;
  }
`;
