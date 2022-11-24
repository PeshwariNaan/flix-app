import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 75vw;
  height: 6rem;
  background-color: none;
  margin: 3rem 0;

  ion-icon {
    font-size: 3rem;
    color: var(--white);
    align-self: center;
  }
  form {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 90vw;
  }
`;

export const StyledInput = styled.input`
  -webkit-appearance: none;
  padding: 0 0 0 3rem;
  height: 100%;
  width: 100%;
  color: var(--white);
  background-color: transparent;
  line-height: 2rem;
  font-size: var(--Mhead) ;
  transition: border 500ms ease-in ;
  &:hover,
  :focus {
    border-bottom: 1px solid var(--grey);
  }

  &::placeholder {
    font-size: var(--Mhead);
  }

  @media (max-width: 500px) {
    font-size: var(--body-med);
    &::placeholder {
      font-size: var(--body-med);
    }

  }
`;

export const ClearInputButton = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  top: 2rem;
  right: 2rem;
  opacity: 0;
  transition: opacity 500ms ease 100ms;

  @media (max-width: 500px) {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
  }

  ${InputContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    opacity: 1;
  }

  ion-icon {
    font-size: 3rem;
    color: var(--white);
    cursor: pointer;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
`;
