import styled from "styled-components";
import { ShowBoxContainer } from "../show-box-container/showBox.styles";


export const ResultsContainer = styled(ShowBoxContainer)`
  grid-template-columns: repeat(auto, minmax(25rem, 30rem)) !important;
  justify-items: start;
`;
export const HeadingsContainer = styled.div`
  display: flex;
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
  }
`;