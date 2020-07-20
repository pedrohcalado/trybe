import React, { Component } from 'react';
import Button from './Button';
import Alert from './Alert';
import DropDown from './DropDown';
import content from './data';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      isDisableButton: false,
      selectedOption: content[0].item,
      hideList: true,
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal,
        isDisableButton: !state.isDisableButton
      }
    ))
  }

  handleList = () => {
    this.setState(state => ({
      hideList: !state.hideList,
    })
  )}

  handleListElement = (event) => {
    this.setState({
      selectedOption: event.target.innerHTML,
    })
  }

  render() {
    return (
      <div className='main'>
        <h1>Exercises 01 and 02</h1>
        <Button content="Clique aqui" isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal &&
          <Alert
            hideComponent={this.changeShowComponent}>
            {{title: "Algum título", content: "Algum conteúdoooo", timeSeconds: 3000 }}
          </Alert>
        }
        <h1>Exercise 03</h1>
        <DropDown data={content} selectedOption={this.state.selectedOption} hideList={this.state.hideList} onClickListElement={this.handleListElement} onClickSelectedOption={this.handleList}>
          {/* <h3>Drop down em React mano</h3> */}
          
        </DropDown>
      </div>
    )
  }
}


export default App;