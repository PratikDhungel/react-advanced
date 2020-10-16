import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const decreaseValue = () => {
    setValue(value - 1);
  };
  const resetValue = () => {
    setValue(0);
  };
  const increaseValue = () => {
    setValue(value + 1);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h1>Simple Counter</h1>
        <h1>{value}</h1>
        <button className='btn' onClick={decreaseValue}>
          Decrease
        </button>
        <button className='btn' onClick={resetValue}>
          Reset
        </button>
        <button className='btn' onClick={increaseValue}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
