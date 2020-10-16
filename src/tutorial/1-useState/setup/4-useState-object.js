import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Daniel', age: 24, aim: 'Be a fullstack developer' });

  const changeMessage = () => {
    setPerson({ ...person, aim: 'Road to fullstack developer...' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.aim}</h3>
      <button className='btn' onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
