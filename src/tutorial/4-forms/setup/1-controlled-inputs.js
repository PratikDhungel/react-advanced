import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      // Get previous value of people
      // Use spread operator to get current values
      // Return a new array with people and newly added object
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('Empty values');
    }
  };
  return (
    <>
      <article>
        <form action='' className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>First Name : </label>
            <input type='text' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type='submit' onClick={handleSubmit}>
            Add Person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
