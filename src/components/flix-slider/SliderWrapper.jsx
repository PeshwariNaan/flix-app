import React from 'react';
import styled from 'styled-components';

const SliderWrapperContainer = styled.div`
  padding: 40px 0;
  overflow: hidden;
  position: relative;
`;

const SliderWrapper = ({ children }) => (
  <SliderWrapperContainer>{children}</SliderWrapperContainer>
);

export default SliderWrapper;
