import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterdClients() {
  return (
    <div>
      <h1>Clientes cadastrados</h1>
      <button><Link to="/register">Cadastrar</Link></button>
      {true && <p>Nenhum cliente cadastrado</p>}
      {false && <p>Lista de clientes</p>}
    </div>
  );
}
