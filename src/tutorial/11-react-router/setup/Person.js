import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  // useParams returns the object with argument used in the Router path and the value used in each Link
  const { id } = useParams();
  const [name, setName] = useState('Default Name');

  useEffect(() => {
    const newPerson = data.find((person) => person.id == id);
    setName(newPerson.name);
  });
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back to People
      </Link>
    </div>
  );
};

export default Person;
