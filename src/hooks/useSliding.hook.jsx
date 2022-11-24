import { useState, useRef, useEffect } from 'react';

const PADDINGS = 110;

const useSliding = (elementWidth, countElements) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth; // slider container width

    setContainerWidth(containerWidth);
    console.log('container width', containerWidth);
    setTotalInViewport(Math.floor(containerWidth / (elementWidth )));
  }, [containerRef.current, elementWidth]);

  console.log('total in viewport', totalInViewport);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + elementWidth*totalInViewport);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - elementWidth*totalInViewport);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
