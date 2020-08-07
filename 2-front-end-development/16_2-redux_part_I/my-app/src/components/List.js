import React from 'react';
import { connect } from 'react-redux';
import store from '../store/index';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    }
  }
  render() {
    console.log(store.getState())
    return (
      <div>
        <div >
          {this.props.list.map(element => (
            
            <p style={{
              textDecoration: this.state.selected.includes(element) ? 'line-through' : null}}
              onClick={() => (this.state.selected.includes(element)) ? 
                this.setState({selected: this.state.selected.filter(e => e !== element)}) :
                this.setState({
                selected: [...this.state.selected, element]
              })
            }
              >{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer});

export default connect(mapStateToProps)(List);
