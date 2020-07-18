import React from 'react';
import states from './states';

class ComboBox extends React.Component {
  render() {
    const { label, value, name, onChange } = this.props;
    return (
      <label>
        {`${this.props.label}: `}
        <select label={label} value={value} name={name} onChange={onChange} >
          {states.map(city => <option key={city}>{city}</option>)}
        </select>
      </label>
    );
  }
}

export default ComboBox;
