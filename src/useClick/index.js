import React, {useState, useRef, useEffect} from 'react';

const useClick = (onclick) => {
  /* Reference는 기본적으로 component의 어떤 부분을 선택할 수 있는 방법 document.getElement(id) */

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onclick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onclick);
      }
    };
  }, []);
  return element;
};

const UseClick = () => {
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
};

export default UseClick;
