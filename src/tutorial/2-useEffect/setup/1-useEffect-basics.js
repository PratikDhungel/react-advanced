import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    if (value >= 1) {
      document.title = `New Messages ${value}`;
    }
  });
  console.log('Render component');
  return (
    <>
      <h2>useEffect Basics</h2>
      <button
        className='btn'
        onClick={() =>
          setValue((prevValue) => {
            return prevValue + 1;
          })
        }
      >
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
