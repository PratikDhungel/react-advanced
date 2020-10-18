import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect invoked');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('Cleanup function returned');
      window.removeEventListener('resize', checkSize);
    };
  });
  // }, []);
  // This case of cleanup can also be solved by using an empty dependency list
  // But it is a better practice to have a clean-up function as later we will working with disappearing components

  console.log('Render');
  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
