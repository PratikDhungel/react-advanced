import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  // reducer always needs to return a state value
  // because we have set a default value and used it
  // not returning anything after a dispatch will break the code

  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return { state, people: newPeople, isModalOpen: true, modalContent: 'Item Added' };
  } else if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'Please enter a value' };
  }

  throw new Error('Matching Action Type not found');
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString, name: name }]);
      // setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
      // setShowModal(true);
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
