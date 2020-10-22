import React, {useState, useRef, useEffect} from 'react';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const {clientY} = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => document.addEventListener('mouseleave', handle), []);
  if (typeof onBefore !== 'function') {
    return;
  }
};

const UseBeforeLeave = () => {
  const beforeLife = () => console.log("please don't leave my page");
  useBeforeLeave(beforeLife);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

export default UseBeforeLeave;
