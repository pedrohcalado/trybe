import React from 'react';
import { connect } from 'react-redux';
// importe o connect do 'react-redux';
import fetchInfos from '../actions';

class CharacterInfo extends React.Component {
  render() {
    //faça a desestruturação das props aqui
    const { character, loading, error } = this.props;
    console.log(character.aliases)
    
    if (!loading && character.length === 1) {
      console.log(character)
      console.log(character.aliases)
      return (
        <ul>
          <li>Name: {character[0].name}</li>
          <li>Gender: {character[0].gender}</li>
          <li>Aliases: {character[0].aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character[0].books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = (state) => ({
  character: state.infosReducer.character,
  error: state.infosReducer.error,
  loading: state.infosReducer.loading,
})

// conecte este componente ao redux aqui
export default connect(mapStateToProps)(CharacterInfo)

//faça as propTypes
