import React from 'react';
import NavBar from '../NavBar';
import Home from '../Home';

export default function Create(props) {
  if (!props.token) {
    return <Home setToken={props.setToken} />
   } 
  return (
    <div>
      <NavBar />
      <h2>Create Recipe</h2>
    </div>
  );
}

