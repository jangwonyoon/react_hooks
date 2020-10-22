import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

const useConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== 'function') {
    return;
  }

  if (!onCancel || typeof onCancel !== 'function') {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const UseConfirm = () => {
  const deleteWorld = () => console.log('Deleting the world');
  const abort = () => console.log('Abort');
  const confirmDelete = useConfirm('Are you sure', deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default UseConfirm;
