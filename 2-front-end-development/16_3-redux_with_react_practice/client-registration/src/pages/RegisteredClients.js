import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterdClients(props) {
  const { users, login } = props;
  console.log(login)
  return (
    <div>
      <h1>Clientes cadastrados</h1>
      <button><Link to="/register">Cadastrar</Link></button>
      {login.login === false && <p>Login não efetuado</p> }
      {login.login === true && users.length === 1 && <p>Nenhum cliente cadastrado</p>}
      {login.login === true && users.length > 1 &&
        users.map(user =>
            user.id !== 0 ?
              <div key={user.id}>
                <p>Nome: {user.name}</p>
                <p>Idade: {user.age}</p>
                <p>E-mail: {user.email}</p>
                <hr />
              </div> :
              false
        )
      }
    </div>
  );
}
