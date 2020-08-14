import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import registerCreator from '../actions';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      password: '',
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  
  inputHandler(name, value) {
    this.setState({ [name]: value });
  }

  onChange(event) {
    this.inputHandler(event.target.id, event.target.value);
  }

  resetState() {
    this.setState({
      name: '',
      age: '',
      email: '',
      password: '',
    })
  }

  renderInputs() {
    const { name, age, email, password } = this.state;
    return (
      <div>
        <label htmlFor="name">Nome: </label>
        <input 
          id="name"
          value={name}
          type="text"
          placeholder="Nome"
          onChange={this.onChange}
        />
        <br /><br />
        <label htmlFor="age">Idade: </label>
        <input
          id="age"
          value={age}
          type="number"
          placeholder="Idade"
          onChange={this.onChange}
        />
        <br /><br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          value={email}
          type="email"
          placeholder="E-mail"
          onChange={this.onChange}
        />
        <br /><br />
        <label htmlFor="email">Password: </label>
        <input
          id="password"
          value={password}
          type="password"
          placeholder="Senha"
          onChange={this.onChange}
        />
      </div>
    );
  }

  render() {
    const { props } = this.props
    console.log(props)
    return (
      <div>
        {props.login.login === false && <p>Login não efetuado</p>}
        {props.login.login === true && <div>
          <h1>Cadastrar</h1>
          {this.renderInputs()}
          <br />
          <button
            type="button"
            onClick={() =>
              {
                props.registerCreator(this.state);
                this.resetState();
                alert('Cliente cadastrado com sucesso');
              }
            }
          >
            Cadastrar
          </button>
          <button 
            type="button"
          >
            <Link to="/clients">Clientes cadastrados</Link>
          </button>
        </div>}
      </div>
    );
  }
}
