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
    })
  }

  renderInputs() {
    const { name, age, email } = this.state;
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
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Cadastrar</h1>
        {this.renderInputs()}
        <br />
        <button
          type="button"
          onClick={() =>
            {
              this.props.registerCreator(this.state);
              this.resetState();
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
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   registerCreator: e => dispatch(registerCreator(e)),
// })

// const mapStateToProps = (state) => ({
//   teste: state,
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Register);
