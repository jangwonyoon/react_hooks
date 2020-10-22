import React, {useState, useEffect} from 'react';

const useTitle = (intialTitle) => {
  const [title, setTitle] = useState(intialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const UseTitle = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('home'), 500);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default UseTitle;

/* 문서의 제목을 업데이트 시켜주는것을 담당하는 hooks */
