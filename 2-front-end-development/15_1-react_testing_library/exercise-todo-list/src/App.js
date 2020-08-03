import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectedItem: '',
      buttonAvailability: true,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeToDo() {
    const { listTodo, selectedItem, buttonAvailability } = this.state;
    listTodo.splice(listTodo.indexOf(selectedItem), 1)
    this.setState({
      listTodo: listTodo,
      buttonAvailability: !buttonAvailability,
      selectedItem: '',
    });
  }

  selectItem(event) {
    this.state.selectedItem ?
    this.setState({
      selectedItem: '',
      buttonAvailability: !this.state.buttonAvailability,
    }) :
    this.setState({
      selectedItem: event.target.innerHTML,
      buttonAvailability: !this.state.buttonAvailability,
    })
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} buttonAvailability={this.state.buttonAvailability} removeToDo={this.removeToDo} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li onClick={(event) => this.selectItem(event)} key={index + 1}>
                  <Item content={todo} />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
