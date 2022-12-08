import styled from "styled-components";

export const DivLoading = styled.div`
position: absolute;
inset: 0;
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 2.5rem;
background: var(--bg-main);
transition: all .8s ease-in-out;
z-index: 999;
`;