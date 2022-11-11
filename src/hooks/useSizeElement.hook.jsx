import { useState, useRef, useEffect } from 'react'

const useSizeElement = () => {
  const elementRef = useRef();
  const [width, setWidth] = useState(0);


  useEffect(() => {
    if(elementRef.current === undefined) {
      elementRef.current = 0
      setWidth(0)
    }else{
    setWidth(elementRef.current.clientWidth)}
  }, [elementRef.current]);

  return { width, elementRef };
}

export default useSizeElement;