import React from 'react';
import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className='main-container'>
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
