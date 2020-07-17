import React from 'react';
import './App.css';
import Forms from './Forms';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'dd',
    }
    this.handleValue = this.handleValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleValue() {
    return this.state.name;
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React form</h1>
        <form>
          <fieldset>
            <Forms />
          </fieldset>
          <fieldset>

          </fieldset>
        </form>
      </div>
    );
  }
  
}

export default App;
