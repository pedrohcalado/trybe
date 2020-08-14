import React from 'react';

class RadioButton extends React.Component {

  render() {
    const { id, name, onChange, value, label } = this.props;
    return (
      <label htmlFor={id}>
        {label}<input id={id} name={name} type='radio' onChange={onChange} value={value} />
        </label>
      
    );
  }
}

export default RadioButton;
