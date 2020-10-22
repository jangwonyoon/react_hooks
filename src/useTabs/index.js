import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const content = [
  {
    tab: 'Section 1',
    content: "I'm the content of the Section 1 "
  },
  {
    tab: 'Section 2',
    content: "I'm the content of the Section 2 "
  }
];

const useTabs = (intialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(intialTab);

  console.log(allTabs[currentIndex]);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const UseTabs = () => {
  const {currentItem, changeItem} = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTabs;
