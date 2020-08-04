import React from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight: {value}, averageWeight: {measurementUnit}, image, id} = this.props.pokemon;
    return (
    <div className='Container'>
      <ol>
        <li>{name}</li>
        <li>{type}</li>
        <li>{`${value}${measurementUnit}`}</li>
        <li><Link to={`/pokemons/${id}`}>Ver detalhes</Link></li>
      </ol>
      <img src={image} alt={name}/>
    </div>);
  }
}

export default Pokemon;
