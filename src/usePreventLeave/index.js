import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();

    /* 아래 구문을 반드시 넣어 주어야 한다.  */
    event.returnValue = '';
  };

  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () => window.removeEventListener('beforeunload', listener);
  return {enablePrevent, disablePrevent};
};

const UsePreventLeave = () => {
  const {enablePrevent, disablePrevent} = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

export default UsePreventLeave;
