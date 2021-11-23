import React from 'react';
import NavBar from '../components/NavBar';
import Buttons from '../components/Buttons';

export default function Search(props) {
  return (
    <div>
      <NavBar setToken={ props.setToken } />
      <h2>Browse Recipes:</h2>
      <section className="homeChef">
      <Buttons>Home Chef:</Buttons>
      <div className="homeChefOptions">
        <div className="homeChefOption homeChefOption1">
          <div className="homeChefOptionImg homeChefOptionImg">

          </div>
          <h3>Breakfast</h3>
        </div>
        <div className="homeChefOption homeChefOption1">
          <div className="homeChefOptionImg homeChefOptionImg">

          </div>
          <h3>Lunch</h3>
        </div>
        <div className="homeChefOption homeChefOption1">
          <div className="homeChefOptionImg homeChefOptionImg">

          </div>
          <h3>Dinner</h3>
        </div>
      </div>
      </section>
    </div>
  );
}

