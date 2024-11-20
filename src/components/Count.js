import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  //   eslint-disable-next-line default-case
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'intialize':
      return initialState;
    default:
      return initialState;
  }
};

const Count = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(count);

  return (
    <div className="col">
      <h2 className="text-warning">Count : {count}</h2>
      <button
        onClick={() => dispatch('increment')}
        className="btn btn-success m-2"
      >
        +
      </button>
      <button
        onClick={() => dispatch('decrement')}
        className="btn btn-danger m-2"
      >
        -
      </button>

      <button
        className="btn btn-warning"
        onClick={() => dispatch('initialize')}
      >
        Réinitialiser
      </button>
    </div>
  );
};

export default Count;
