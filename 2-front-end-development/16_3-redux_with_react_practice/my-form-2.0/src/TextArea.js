import React from 'react';

class TextArea extends React.Component {

  render() {
    const { label, name, type, maxLength, onChange, value, onMouseEnter } = this.props;
    return (
      <label>
        {`${label}: `}
        <textarea name={name} type={type} maxLength={maxLength}  required onChange={onChange} value={value} onMouseEnter={onMouseEnter} />
      </label>
    );
  }
}

export default TextArea;
