import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data'

class Pokedex extends React.Component {
  render() {
    const filteredPokemons = pokemons.filter(pokemon => {
     return ['All', pokemon.type].includes(this.props.type);
    });
    return (filteredPokemons
      .filter(pokemon => {
        return filteredPokemons.indexOf(pokemon) === this.props.index;
      })
      .map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id}/>))
  }
}

export default Pokedex;
