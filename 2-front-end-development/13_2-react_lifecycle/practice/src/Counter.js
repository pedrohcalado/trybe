import React from 'react';

class CounterDisplay extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.value % 3 !== 0) return false;
  //   return true;
  // }

  componentDidMount() {
    console.log(this.props.value)
    // this.props.updateStateToTen();
  }

  
  render() {
    return (
      this.props.value < 13 || this.props.value > 15 ?
      <div> counter: {this.props.value}</div> :
      null
    );
  }
}

export default CounterDisplay;
