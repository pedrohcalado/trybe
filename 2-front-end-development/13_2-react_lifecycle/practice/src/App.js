import React from 'react';
import './App.css';
import CounterDisplay from './Counter';

// App.js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  updateStateToTen = () => {
   this.setState({
      counter: 10,
    })
  }

  render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} updateStateToTen={this.updateStateToTen} />
      </div>
    );
  }
}

export default App;
