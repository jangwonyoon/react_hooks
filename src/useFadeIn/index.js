import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    console.log(element);
    if (element.current) {
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return {ref: element, style: {opacity: 0}};
};

const UseFadeIn = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>fsadfasdfsdafasdfddf</p>
    </div>
  );
};

export default UseFadeIn;
