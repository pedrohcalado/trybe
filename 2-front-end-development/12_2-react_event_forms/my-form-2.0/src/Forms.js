import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import ComboBox from './ComboBox';
import RadioButton from './RadioButton';
import TextArea from './TextArea';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      emailInput: '',
      cpfInput: '',
      addressInput: '',
      cityInput: '',
      stateInput: '',
      kindInput: '',
      resumeInput: '',
      roleDescriptionInput: '',
      roleInput: '',
      alertedAlready: false,
    }
  }

  handleInput = (event) => {
    console.log(event.target);
    const { name, value, id } = event.target;
    switch(name) {
      case('nameInput'):
        this.setState({
          [name]: value.toUpperCase(),
        });
        break;
      case('addressInput'):
        this.setState({
          [name]: value.replace(/[^\w\s]/gi, ''),
        })
        break;
      case('cpfInput'):
        this.setState({
          [name]: value.replace(/[^0-9]/gi, ''),
        })
        break;
      case('kindInput'):
        this.setState({
          [name]: id,
        });
        break;
      default:
        this.setState({
          [name]: value
        })    
    }
  }
  
  handleBlur = (event) => {
    const { name, value } = event.target;
    (value[0] && value[0].match(/[^0-9]/gi) === null) ?
    this.setState({
      [name]: '',
    }):
    this.setState({
      [name]: value,
    })
  }

  handleMouseEnter = () => {
    if (!this.state.alertedAlready) {
      this.setState({
        alertedAlready: true
      });
      alert('Preencha com cuidado esta informação.')
    }
  }

  render() {
    return(
      <div>
        <form>
          <fieldset>
            <Input label={'Nome'} name={'nameInput'} type={'text'} maxLength={40} onChange={this.handleInput} value={this.state.nameInput} />
            <Input label={'Email'} name={'emailInput'} type={'text'} maxLength={50} onChange={this.handleInput} value={this.state.emailInput} />
            <Input label={'CPF'} name={'cpfInput'} type={'text'} maxLength={11} onChange={this.handleInput} value={this.state.cpfInput} />
            <Input label={'Endereço'} name={'addressInput'} type={'text'} maxLength={200} onChange={this.handleInput} value={this.state.addressInput} />
            <Input label={'Cidade'} name={'cityInput'} type={'text'} onBlur={this.handleBlur} maxLength={28} onChange={this.handleInput} value={this.state.cityInput} />
            <ComboBox label={'Estado'} onChange={this.handleInput} name={'stateInput'} value={this.state.stateInput}/>
            <p>Tipo:</p>
            <RadioButton id='Casa' name={'kindInput'} onChange={this.handleInput} value={this.state.kindInput} label={'Casa'}/>
            <RadioButton id='Apartamento' name={'kindInput'} onChange={this.handleInput} value={this.state.kindInput} label={'Apartamento'}/>
          </fieldset>
          <fieldset>
            <TextArea label={'Resumo do curriculo'} name={'resumeInput'} type={'text'} maxLength={1000} onChange={this.handleInput} value={this.state.resumeInput}/>
            <TextArea label={'Cargo'} name={'roleInput'} type={'text'} maxLength={40} onChange={this.handleInput} onMouseEnter={this.handleMouseEnter} value={this.state.holeInput}/>
            <Input label={'Descrição do cargo'} name={'roleDescriptionInput'} type={'text'} maxLength={500} onChange={this.handleInput} value={this.state.roleDescriptionInput} />
          </fieldset>
          <Button type={'button'} label={'Send'} />
        </form>
      </div>
    );
  }
}

export default Forms;
