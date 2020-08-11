import React from 'react';

class GeneralInfos extends React.Component {
  render() {
    const { style, name, email, cpf, address, city, state, kind, resume, roleDescription, role } = this.props;
    return (
      <div style={style}>
        <p>Nome: {name}</p>
        <p>E-mail: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {address}</p>
        <p>Cidade: {city}</p>
        <p>Estado: {state}</p>
        <p>Tipo: {kind}</p>
        <p>Currículo: {resume}</p>
        <p>Descrição do cargo: {roleDescription}</p>
        <p>Cargo: {role}</p>
      </div>
    );
  }
}

export default GeneralInfos;
