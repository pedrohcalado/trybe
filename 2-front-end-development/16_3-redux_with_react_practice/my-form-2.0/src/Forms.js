import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import ComboBox from './ComboBox';
import RadioButton from './RadioButton';
import TextArea from './TextArea';
import GeneralInfos from './GeneralInfos';
import { connect } from 'react-redux';
import { nameCreator, emailCreator, habitationCreator } from './actions';
import store from './store';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // nameInput: '',
      // emailInput: '',
      cpfInput: '',
      addressInput: '',
      cityInput: '',
      stateInput: '',
      // kindInput: '',
      resumeInput: '',
      roleDescriptionInput: '',
      roleInput: '',
      alertedAlready: false,
      display: 'none',
    }
  }

  handleInput = (event) => {
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

  handleClick = (event) => {
    const { value } = event.target;
    switch(value) {
      case('Enviar'):
        this.setState({
          display: 'block',
        })
        break;
      case('Limpar'):
        this.setState({
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
          display: 'none',
        })
        break;
      default:
        return false
    }
  }
  
  renderInputs() {
    return (
      <div>
        <Input value={this.props.name} label={'Nome'} name={'nameInput'} type={'text'} maxLength={40} onChange={(event) => 
        {
          console.log(store.getState())
          console.log(event.target.value)
          return this.props.nameCreator(event.target.value)}} />
        <Input label={'Email'} name={'emailInput'} type={'text'} maxLength={50} onChange={(event) => this.props.emailCreator(event.target.value)} value={this.props.email} />
        <Input label={'CPF'} name={'cpfInput'} type={'text'} maxLength={11} onChange={this.handleInput} value={this.state.cpfInput} />
        <Input label={'Endereço'} name={'addressInput'} type={'text'} maxLength={200} onChange={this.handleInput} value={this.state.addressInput} />
        <Input label={'Cidade'} name={'cityInput'} type={'text'} onBlur={this.handleBlur} maxLength={28} onChange={this.handleInput} value={this.state.cityInput} />
      </div>
    )
  }

  render() {
    return(
      <div>
        <form>
          <fieldset>
            {this.renderInputs()}
            <ComboBox label={'Estado'} onChange={this.handleInput} name={'stateInput'} value={this.state.stateInput}/>
            
            <p>Tipo:</p>

            <RadioButton id='Casa' name={'kindInput'} onChange={(event) => this.props.habitationCreator(event.target.id)} value={this.state.kindInput} label={'Casa'} />

            <RadioButton id='Apartamento' name={'kindInput'} onChange={(event) => this.props.habitationCreator(event.target.id)} value={this.state.kindInput} label={'Apartamento'} />

          </fieldset>
          <fieldset>
            <TextArea label={'Resumo do curriculo'} name={'resumeInput'} type={'text'} maxLength={1000} onChange={this.handleInput} value={this.state.resumeInput}/>
            <TextArea label={'Cargo'} name={'roleInput'} type={'text'} maxLength={40} onChange={this.handleInput} onMouseEnter={this.handleMouseEnter} value={this.state.holeInput}/>
            <Input label={'Descrição do cargo'} name={'roleDescriptionInput'} type={'text'} maxLength={500} onChange={this.handleInput} value={this.state.roleDescriptionInput} />
          </fieldset>
          <Button value={'Enviar'} type={'button'} label={'Enviar'} onClick={this.handleClick} />
          <Button value={'Limpar'} type={'button'} label={'Limpar'} onClick={this.handleClick}/>
        </form>
        <GeneralInfos style={{display: this.state.display}} name={this.props.name} email={this.props.email} cpf={this.state.cpfInput} address={this.state.addressInput} city={this.state.cityInput} state={this.state.stateInput} kind={this.props.habitation} resume={this.state.resumeInput} roleDescription={this.state.roleDescriptionInput} role={this.state.roleInput} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  nameCreator: e => dispatch(nameCreator(e)),
  emailCreator: e => dispatch(emailCreator(e)),
  habitationCreator: e => dispatch(habitationCreator(e)),
})

const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  habitation: state.habitation,
})

// const mapDispatchToProps = { nameCreator };

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
