import React from 'react';
import { Link } from 'react-router-dom';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    }
    this.inputHandler = this.inputHandler.bind(this);
  }
  
  inputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Cadastrar</h1>
        <label htmlFor="name">Nome: </label>
        <input id="name" type="text" placeholder="Nome" onChange={(event) => this.inputHandler(event.target.id, event.target.value)} />
        <br /><br />
        <label htmlFor="age">Idade: </label>
        <input id="age" type="number" placeholder="Idade" onChange={(event) => this.inputHandler(event.target.id, event.target.value)} />
        <br /><br />
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" placeholder="E-mail" onChange={(event) => this.inputHandler(event.target.id, event.target.value)} />
        <br /><br />
        <button type="button">Cadastrar</button>
        <button type="button">
          <Link to="/clients">Clientes cadastrados</Link>
        </button>
      </div>
    );
  }
}



