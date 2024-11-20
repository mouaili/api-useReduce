import React from 'react';
import './App.css';
// import Count from './components/Count';
import SuperCount from './components/SuperCount';

function App() {
  return (
    <div className="container text-center">
      <h1 className="text-info m-5">Le hook useReduce()</h1>
      <div className="row">
        {/* <Count /> */}
        <SuperCount />
      </div>
    </div>
  );
}

export default App;
