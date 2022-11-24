import styled from "styled-components";
import { ShowBoxContainer } from "../show-box-container/showBox.styles";


export const ResultsContainer = styled(ShowBoxContainer)`
  grid-template-columns: repeat(auto, minmax(15rem, 15rem)) !important;
  justify-items: start;
`;
export const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 600px){
    flex-direction: column;
    }
  h1 {
    font-size: var(--Lhead);
    color: var(--white);
    margin: 0 5rem 0 0 ;

    @media (max-width: 600px){
      font-size: var(--Mhead);
      margin: 0 5rem 2rem 0 ;
    }
  }
  

 
  
`;

