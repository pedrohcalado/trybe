import React from 'react';

const Users = ({ match, greetingMessage }) => console.log(match) || (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
    {match && <p>The id is {match.params.id}</p>}
  </div>
);

export default Users;
