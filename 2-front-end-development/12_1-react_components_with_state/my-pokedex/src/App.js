import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import { PokeButton, TypeButton } from './PokeButton';
import pokemons from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0,
      type: 'All',
    }
  }

  changeCounter = () => {
    const filteredPokemons = pokemons.filter(pokemon => ['All', pokemon.type].includes(this.state.type));
    // console.log(this.state.counter)
    // console.log(this.state.type)

    return (this.state.counter === filteredPokemons.length - 1) ?
    this.setState(() => ({
      counter: 0,
    })) :
    this.setState((state) => ({
      counter: state.counter + 1,
    }))
  }

  changeType = (type) => {
    this.setState(() => ({
      type,
      counter: 0,
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <div className='main-container'>
          <Pokedex index={this.state.counter} type={this.state.type} />
          <PokeButton clickHandler={this.changeCounter}/>
        </div>
        <div className='buttons-container'>
          <TypeButton clickHandler={this.changeType} label='Fire' />
          <TypeButton clickHandler={this.changeType} label='Psychic' />
          <TypeButton clickHandler={this.changeType} label='Electric' />
          <TypeButton clickHandler={this.changeType} label='Bug' />
          <TypeButton clickHandler={this.changeType} label='Poison' />
          <TypeButton clickHandler={this.changeType} label='Normal' />
          <TypeButton clickHandler={this.changeType} label='Dragon' />
          <TypeButton clickHandler={this.changeType} label='All' />
        </div>
      </div>
    );
  }
}

export default App;
