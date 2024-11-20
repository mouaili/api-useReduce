import React, { useReducer } from 'react';

const initialState = { countOne: 0, countTwo: 0 };

const reducer = (state, action) => {
  console.log(state);

  // eslint-disable-next-line default-case
  switch (action.type) {
    //case state.countOne:
    case 'increment':
      return { ...state, countOne: state.countOne + action.value };
    case 'decrement':
      return { ...state, countOne: state.countOne - action.value };
    //case state.countTwo;
    case 'ajouter':
      return { ...state, countTwo: state.countTwo + action.value };
    case 'soustraire':
      return { ...state, countTwo: state.countTwo - action.value };
    //intialize state
    case 'initialize':
      return initialState;

    default:
      throw new Error(`Invalid action in this case`);
  }
};

function SuperCount() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="col-6">
        <h3 className="text-success">SuperCount : {state.countOne}</h3>
        <button
          className="btn btn-success m-3"
          onClick={() => dispatch({ type: 'increment', value: 8 })}
        >
          +
        </button>
        <button
          className="btn btn-warning m-3"
          onClick={() => dispatch({ type: 'decrement', value: 2 })}
        >
          -
        </button>
      </div>

      <div className="col-6">
        <h3 className="text-muted">SuperCount : {state.countTwo}</h3>
        <button
          className="btn btn-dark m-3"
          onClick={() => dispatch({ type: 'ajouter', value: 4 })}
        >
          +
        </button>
        <button
          className="btn btn-secondary m-3"
          onClick={() => dispatch({ type: 'soustraire', value: 9 })}
        >
          -
        </button>
      </div>

      <div className="col">
        <button
          className="btn btn-primary m-3"
          onClick={() => dispatch({ type: 'initialize' })}
        >
          0
        </button>
      </div>
    </>
  );
}

export default SuperCount;
