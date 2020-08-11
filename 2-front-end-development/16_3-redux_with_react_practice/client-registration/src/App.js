import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterdClients from './pages/RegisteredClients';
import { Register } from './pages/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/clients" component={RegisterdClients} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
