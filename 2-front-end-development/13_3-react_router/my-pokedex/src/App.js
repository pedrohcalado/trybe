import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import { PokeButton, TypeButton } from './PokeButton';
import PokemonDetails from './PokemonDetails';
import Erro from './Erro';
import About from './About.js';
import pokemons from './data';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0,
      type: 'All',
    }
    this.mainPage = this.mainPage.bind(this);
  }

  changeCounter = () => {
    const filteredPokemons = pokemons.filter(pokemon => ['All', pokemon.type].includes(this.state.type));
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

  mainPage() {
    return (
      <div className="App">
        <div className='main-container'>
          <Pokedex index={this.state.counter} type={this.state.type} />
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
        <div>
          <PokeButton clickHandler={this.changeCounter}/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Pokedex</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <Switch>
          <Route path="/pokemons/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />} />
          <Route path="/about" component={About} />
          <Route path="/:error" component={Erro} />
          <Route exact path="/" component={this.mainPage} />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
