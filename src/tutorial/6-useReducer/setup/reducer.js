export const reducer = (state, action) => {
  // reducer always needs to return a state value
  // because we have set a default value and used it
  // not returning anything after a dispatch will break the code

  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return { state, people: newPeople, isModalOpen: true, modalContent: 'Item Added' };
  } else if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'Please enter a value' };
  } else if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  } else if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => person.id !== action.payload);
    return { ...state, people: newPeople, isModalOpen: true, modalContent: 'Item Removed' };
  }

  throw new Error('Matching Action Type not found');
};
