import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterdClients from './pages/RegisteredClients';
import { Register } from './pages/Register';
import registerCreator from './actions';



export function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/clients" component={RegisterdClients} />
        <Route path="/register" render={(props) => <Register {...props} />} />
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
  teste: state,
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
