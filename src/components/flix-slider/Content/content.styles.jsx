import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: relative;
  height: 30vw;
  //width: 40vw;
  margin-top: -40px;
  background-color: red;

  h1 {
    font-size: 45px;
    color: #fff;
    font-weight: 700;
  }
  p {
    font-size: 18px;
    color: #999;
    margin-top: 20px;
    max-width: 500px;
  }
`;

export const BackdropImage = styled.img`
    min-width: 100%;
    max-height: 100%;
    min-height: 100%;
    
`

export const BackgroundContainer = styled.div`
  position: absolute;
  height: 37vw;
  margin-top: -40px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ShadowContainer = styled.div`
  //position: relative;
  height: 37vw;
  margin-top: -40px;
  left: 0;
  background: #000;
  width: 30%;
  z-index: 2;
  &:before {
    content: '';
    position: absolute;
    z-index: 10;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
`;

export const BGImageContainer = styled.div`
  position: relative;
  height: 37vw;
  margin-top: -40px;
  right: 0;
  width: 70%;
  height: 100%;
  background-position: center 10%;
  background-size: cover;
  z-index: 1;
`;

export const AreaContainerOut = styled.div`
  left: 0;
  right: 0;
  height: 100%;
  z-index: 3;
`;

export const AreaContainerIn = styled.div`
  padding: 30px 70px;
  color: wheat;
`;

export const CloseButton = styled.button`
  color: #fff;
  width: 50px;
  height: 50px;
  background: transparent;
  outline: none;
  border: none;
  position: absolute;
  top: 30px;
  right: 80px;

  ion-icon {
    font-size: 50px;
    color: var(--text);
    cursor: pointer;
    transition: all 1s linear;
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;
