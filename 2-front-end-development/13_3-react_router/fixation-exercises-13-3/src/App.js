import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Users from './Users';
import { 
  BrowserRouter,
  Link,
  Route,
  Switch,
 } from 'react-router-dom';
import StrictAccess from './StrictAccess';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Joao',
      password: '1234',
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  
  handleUsernameChange (username) {
    this.setState({ username });
  }
  
  handlePasswordChange (username) {
    this.setState({ username });
  }

  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict</Link>
        <Switch>
          <Route path="/users/:id" render={(props) => < Users {...props} greetingMessage="Good Morning" />} />
          <Route path="/strict-access">
            <StrictAccess username={this.state.username} password={this.state.password} />
          </Route>
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;