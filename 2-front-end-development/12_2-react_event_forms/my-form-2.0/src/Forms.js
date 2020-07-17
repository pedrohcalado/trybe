import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      cpfInput: '',
      emailInput: '',
    }
  }

  handleInput = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    name === 'nameInput' ?
    this.setState({
      [name]: value.toUpperCase(),
    }) :
    this.setState({
      [name]: value
    })
  }

  validateField(fieldName, value) {
    switch(fieldName) {
      case 'emailInput':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        return isValid ? '' : ' is invalid';
      case 'password':
        return value.length >= 6 ? '' : ' is too short';
      default:
        break;
    }
  }


  render() {
    return(
      <div>
        <form>
          <label>
            Name: 
            <input name='nameInput' type='text' maxLength='40'  required onChange={this.handleInput} value={this.  state.nameInput}></input>
          </label>
          <label>
            Email: 
            <input name='emailInput' type='text' maxLength='50'   required onChange={this.handleInput} value={this. state.emailInput}></input>
          </label>
          <label>
            CPF: 
            <input name='cpfInput' type='number' maxLength='11'   required onChange={this.handleInput} value={this. state.cpfInput}></input>
          </label>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}

export default Forms;
