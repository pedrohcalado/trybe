import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight: {value}, averageWeight: {measurementUnit}, image} = this.props.pokemon;
    return (
    <div className='Container'>
      <ol>
        <li>{name}</li>
        <li>{type}</li>
        <li>{`${value}${measurementUnit}`}</li>
      </ol>
      <img src={image} alt={name}/>
    </div>);
  }
}

export default Pokemon;
