import React from 'react';

class DropDown extends React.Component {
  
  render() {
    // console.log(this.props.children)
    const { data, selectedOption, hideList, onClickSelectedOption, onClickListElement } = this.props;
    return (
      <div>
        {this.props.children}

        <div style={{ border: '1px solid black', width: '50px', textAlign: 'center' }} onClick={onClickSelectedOption}>{selectedOption}</div>

        <div onClick={onClickListElement} style={{ border: '1px solid black', width: '150px', textAlign: 'center', display: hideList ? 'none' : 'block' }}>
          {data.map(item => <div key={item.id}>{item.item}
        </div>)}

        </div>
      </div>
    );
  }
}

DropDown.defaultProps = {
  children: <h1>Título padrão</h1>
}

export default DropDown;
