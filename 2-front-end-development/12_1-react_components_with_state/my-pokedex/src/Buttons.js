import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.handleCLick(this.props.label)
        }}>{this.props.label}</button>
      </div>
    );
  }
}

class HeaderOne extends React.Component {
  render() {

    return(
      <h1>{this.props.insideText}</h1>
    );
  }
}

export {
  Buttons,
  HeaderOne,
};
