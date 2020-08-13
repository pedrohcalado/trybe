import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterdClients from './pages/RegisteredClients';
import { Register } from './pages/Register';
import { registerCreator, loginCreator } from './actions';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/clients">
          <RegisterdClients users={props.users} login={props.login} />  
        </Route>
        <Route path="/register">
          <Register props={props} />
        </Route>
        <Route path="/login">
          <Login props={props} />
        </Route>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  registerCreator: e => dispatch(registerCreator(e)),
  loginCreator: (email, password, users) => dispatch(loginCreator(email, password, users)),
})

const mapStateToProps = (state) => ({
  users: state.users,
  login: state.loginReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
