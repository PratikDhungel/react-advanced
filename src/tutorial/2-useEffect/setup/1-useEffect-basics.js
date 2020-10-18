import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    if (value >= 1) {
      document.title = `New Messages ${value}`;
    }
  }, [value, secondValue]);
  // No dependencies list means useEffect is invoked on each render
  // Empty dependency list means useEffect is invoked on initial render only
  // Dependency list with value means useEffect is invoked on that value change

  useEffect(() => {
    console.log('Initial render');
  }, []);

  console.log('Render component');
  return (
    <>
      <h2>{value}</h2>
      <h2>{secondValue}</h2>
      <button
        className='btn'
        onClick={() =>
          setValue((prevValue) => {
            return prevValue + 1;
          })
        }
      >
        First Value
      </button>
      <button
        className='btn'
        onClick={() =>
          setSecondValue((prevValue) => {
            return prevValue + 1;
          })
        }
      >
        Second Value
      </button>
    </>
  );
};

export default UseEffectBasics;
