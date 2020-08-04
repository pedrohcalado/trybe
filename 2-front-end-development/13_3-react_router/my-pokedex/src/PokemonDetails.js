import React from 'react';

class PokemonDetails extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { pokemons } = this.props;
    const pokemon = pokemons.filter(pokemon => `${pokemon.id}` === id)[0];
    return (
      <div className="details">
        <div className="ContainerDetails">
          <img src={`${pokemon.image}`} alt="pokemon" />
          <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.type}</p>
            <p>{`${pokemon.averageWeight.value}${pokemon.averageWeight.measurementUnit}`}</p>
          </div>
        </div>
        <h3>Summary</h3>
        <p>{pokemon.summary}</p>
        <div className="location">
          {pokemon.foundAt.map(location => 
              <div key={location.location}>
                <p>{location.location}</p>
                <img src={`${location.map}`} alt="location" />
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
