import React, {useState} from 'react';

const useInput = (intialValue, validator) => {
  const [value, setValue] = useState(intialValue);
  const onChange = (event) => {
    const {
      target: {value}
    } = event;

    let willUpadate = true;

    /* 유효성 검사 validator */

    if (typeof validator === 'function') {
      willUpadate = validator(value);
    }
    if (willUpadate) {
      setValue(value);
    }
  };
  return {value, onChange};
};

const App = () => {
  const maxLen = (value) => !value.includes('@');
  const name = useInput('Mr.', maxLen);
  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
