import React from 'react';
import ReactDOM from 'react-dom';
import UseInput from './useInput';
import UseTabs from './useTabs';
import App from './App';
import UseTitle from './useTitle';
import UseClick from './useClick';
import UseConfirm from './useConfirm';
import UsePreventLeave from './usePreventLeave';
import UseBeforeLeave from './useBeforeLeave';

ReactDOM.render(
  <React.StrictMode>
    <UseBeforeLeave />
  </React.StrictMode>,
  document.getElementById('root')
);
