import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 25rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  background-color: var(--red);
  color: var(--white);
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 0 1rem 0;

  &:hover {
    background-color: var(--white);
    color: var(--red);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: var(--white);
    color: #4285f4;
    border: none;
  }
`;

export const ExitButton = styled(BaseButton)`
  width: 10rem;
  border: 1px solid black;
  min-width: 10rem;
  height: 3rem;
  line-height: 3rem;
  margin: 0;
`;
