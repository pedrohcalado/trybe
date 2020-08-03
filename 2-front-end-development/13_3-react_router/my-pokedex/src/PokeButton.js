import React from 'react';

class PokeButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.clickHandler()}>Próximo pokémon</button>
    );
  }
}

class TypeButton extends React.Component {
  render() {
    return (
      <button onClick={() => {
        this.props.clickHandler(this.props.label)
      }}>{this.props.label}</button>
    );
  }
}

export {
  PokeButton,
  TypeButton,
}
