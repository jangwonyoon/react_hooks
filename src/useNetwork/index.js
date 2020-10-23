import React, {useState, useEffect} from 'react';

/* useNetwork는 navigator가 online 또는 offline 되는 것을 막아 준다. */

const useNetwork = (onChange) => {
  /* navigator.onLine을 통해 navigator가 온라인인지 아닌지 확인이 가능하다.*/

  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onchange === 'function') {
      onchange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
  }, []);
  return status;
};

const UseNetwork = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? 'We just went online' : 'We are just went Offline');
  };
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>{onLine ? 'Online' : 'offline'}</h1>
    </div>
  );
};

export default UseNetwork;
