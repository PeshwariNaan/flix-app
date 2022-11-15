import styled, {css} from "styled-components";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: var(--red);
`;

export const FormInputLabel = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: transparent;
  color: var(--white);
  font-size: 18px;
  padding: 10px 0 10px 0;
  display: block;
  width: 100%;
  border: none;
  
  border-bottom: 1px solid var(--white);
  margin: 1rem 0;
  &:focus {
    outline: none;
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 1.75rem 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;