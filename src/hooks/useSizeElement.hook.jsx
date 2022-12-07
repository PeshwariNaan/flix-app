import { useState, useRef, useEffect } from 'react'

const useSizeElement = () => {
  const elementRef = useRef();
  const [width, setWidth] = useState(0);


  useEffect(() => {   
    setTimeout(() => {
      setWidth(elementRef.current.clientWidth)
      }, 1000);
    
  }, [elementRef.current]);

  return { width, elementRef };
}

export default useSizeElement;