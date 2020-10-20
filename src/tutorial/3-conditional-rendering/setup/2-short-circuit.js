import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world 1';
  // const secondValue = text && 'hello world 2';

  return (
    <>
      {/* <h1>{firstValue}</h1> */}
      {/* <h1>Value: {secondValue}</h1> */}
      {/* {text && <h1>Hello World 1</h1>} */}
      {/* {!text && <h1>Hello World 2</h1>} */}

      <h1>{text || 'John Doe'}</h1>
      <button className='btn' style={{ marginBottom: '20px' }} onClick={() => setIsError(!isError)}>
        Toggle State
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error</p>
      ) : (
        <div>
          <h2>No errors</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
