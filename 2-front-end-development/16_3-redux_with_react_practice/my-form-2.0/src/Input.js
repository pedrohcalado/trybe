import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.validateField = this.validateField.bind(this);
  }

  validateField(fieldName, value) {
    switch(fieldName) {
      case 'emailInput':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return (isValid || value === '') ? '' : ' is invalid';
      default:
        break;
    }
  }

  render() {
    const { label, name, type, maxLength, onChange, value, onBlur } = this.props;
    return (
      <label>
        {`${label}: `}
        <input name={name} type={type} maxLength={maxLength}  required onChange={onChange} value={value} onBlur={onBlur} />
          <p>{this.validateField(name, value)}</p>
          {this.props.children}
      </label>
    );
  }
}

export default Input;
