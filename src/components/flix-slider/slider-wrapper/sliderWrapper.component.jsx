import React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
    padding: 40px 0;
    overflow: hidden;
    position: relative;
`

const SliderWrapper = () => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

export default SliderWrapper;
