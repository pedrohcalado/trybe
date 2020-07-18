import React from 'react';

class Button extends React.Component {
  
  render() {
    const { type, label } = this.props;
    return (
      <button type={type}>{label}</button>
    );
  }
}

export default Button;
