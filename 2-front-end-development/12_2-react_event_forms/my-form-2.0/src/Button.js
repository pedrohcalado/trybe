import React from 'react';

class Button extends React.Component {
  
  render() {
    const { value, type, label, onClick } = this.props;
    return (
      <button value={value} type={type} onClick={onClick}>{label}</button>
    );
  }
}

export default Button;
