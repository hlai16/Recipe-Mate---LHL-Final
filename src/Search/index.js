import React from 'react';
import NavBar from '../components/NavBar';

export default function Search(props) {
  return (
    <div>
      <NavBar setToken={ props.setToken } />
      <h2>Search Index</h2>
    </div>
  );
}

