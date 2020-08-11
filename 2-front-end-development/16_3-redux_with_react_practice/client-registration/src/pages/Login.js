import React from 'react';

export default function Login() {
  return (
    <div>
      <h1>LOGIN</h1>
      <br /><br />
      <label htmlFor="email">E-mail: </label>
      <input id="email" type="email" placeholder="E-mail" />
      <br /><br />
      <label htmlFor="password">Senha: </label>
      <input id="password" type="password" placeholder="Senha" />
      <br /><br />
      <div>
        <button type="button">Login</button>
      </div>
    </div>
  );
}
