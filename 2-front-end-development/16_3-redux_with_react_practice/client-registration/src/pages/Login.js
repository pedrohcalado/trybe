import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(name, value) {
    this.setState({
      [name]: value,
    })
  }


  render() {
    return (
      <div>
        <h1>LOGIN</h1>
        <br /><br />
        <label htmlFor="email">E-mail: </label>
        <input id="email" name="email" value={this.state.email} onChange={(event) => this.handleInput(event.target.name, event.target.value)} type="email" placeholder="E-mail" />
        <br /><br />
        <label htmlFor="password">Senha: </label>
        <input id="password" name="password" value={this.state.password} onChange={(event) => this.handleInput(event.target.name, event.target.value)} type="password" placeholder="Senha" />
        <br /><br />
        <div>
          <button onClick={() => {
            this.setState({ loginClick: true });
            this.props.props.loginCreator(this.state.email, this.state.password, this.props.props.users);
            }} type="button">Login</button>
            {this.state.loginClick && <Redirect to="/clients" />}
        </div>
      </div>
    );
  }
}

export default Login;
