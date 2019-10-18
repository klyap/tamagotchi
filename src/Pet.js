import React from 'react';
import './App.css';
import * as petGif from './assets/bloop.gif';

function Pet(props) {
  return (
    <div>
      <img src={petGif} className="App-logo" alt="logo" />
      <button onClick={() => props.incrementFood()}>Feed</button>
    </div>
  );
}

export default Pet;
