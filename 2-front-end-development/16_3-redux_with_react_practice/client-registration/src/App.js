import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterdClients from './pages/RegisteredClients';
import { Register } from './pages/Register';
import { registerCreator } from './actions';
import store from './store';

function App(props) {
  console.log('store')
  return (
    <div className="App">
      <Switch>
        <Route path="/clients">
          <RegisterdClients users={props.users} />  
        </Route>
        <Route path="/register">
          <Register props={props} />
        </Route>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  registerCreator: e => dispatch(registerCreator(e)),
})

const mapStateToProps = (state) => ({
  users: state.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
