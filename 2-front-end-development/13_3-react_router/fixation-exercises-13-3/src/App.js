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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users/:id" component={() => <Users greetingMessage="Good Morning" />}  />
          {/* <Route path="/users/:id" render={(props) => <Users greetingMessage="Good morning" />} /> */}
          {/* <Route path="/users/:id">
            <Users greetingMessage="Good Morning"/>
          </Route> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;