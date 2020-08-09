import React from 'react';
import { Provider } from 'react-redux'; // o provider é o meio pelo qual disponibilizamos o Store
import store from './store/index';
import List from './components/List';
import InputsList from './components/InputsList';

class App extends React.Component {
  render() {
    // console.log(store.getState())
    // console.log(<InputsList />)
    return (
      <div>
        <Provider store={store}>
          <InputsList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;