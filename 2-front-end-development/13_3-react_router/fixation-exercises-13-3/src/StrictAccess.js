import React from 'react';
import { Redirect } from 'react-router-dom';

const StrictAccess = ({ username, password }) => {
  if (username === "Joao" && password === '1234') return <p>Welcome, João!</p>
  
  return (
    <div>
      {alert("Access Denied")}
      <Redirect to="/" />
    </div>)
    
};

export default StrictAccess;
