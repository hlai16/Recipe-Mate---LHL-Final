import React from 'react';
import NavBar from '../NavBar';
import Home from '../Home';

export default function Create(props) {

  return (
    <div>
      <NavBar setToken={ props.setToken }/>
      <h2>Create Recipe</h2>
    </div>
  );
}

