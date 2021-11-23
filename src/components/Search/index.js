import React from 'react';
import NavBar from '../NavBar';
import Buttons from '../Buttons';
import './index.scss';
import useVisualMode from "../../hooks/useVisualMode";
import { useState } from "react";




export default function Search(props) {
  return (
    <div className="search-categories">
      <NavBar setToken={props.setToken} />
      <div className="search-categories--inner">
        {/* <div classname="search-categories--inner--inner"> */}
        <h2>Browse Recipes:</h2>
        <section className="search-categories--categories">
          <section className="search-category search-categories--homeChef">
            <Buttons medium>Home Chef:</Buttons>

            <div className="search-categories--homeChefOptions">
              <div className="search-categories--homeChefOption homeChefOption1">
                <div className="search-categories--homeChefOptionImg homeChefOptionImg1">
                  <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/breakfast.jpeg?raw=true"
                    alt="breakfast" />
                </div>
                <h3>Breakfast</h3>
              </div>
              <div className="search-categories--homeChefOption homeChefOption2">
                <div className="search-categories--homeChefOptionImg homeChefOptionImg2">
                  <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/lunch.jpg?raw=true"
                    alt="lunch" />
                </div>
                <h3>Lunch</h3>
              </div>
              <div className="search-categories--homeChefOption homeChefOption3">
                <div className="search-categories--homeChefOptionImg homeChefOptionImg3">
                  <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/dinner.jpg?raw=true"
                    alt="dinner" />
                </div>
                <h3>Dinner</h3>
              </div>
            </div>
          </section>
          <section className="search-categories--homeScientist search-category">
            <Buttons medium>Home Scientist:</Buttons>
            <div className="search-categories--homeScientistOptions">
              <div className="search-categories--homeScientistOption homeScientistOption1">
                <div className="search-categories--homeScientistOptionImg homeScientistOptionImg1">
                  <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/personalCare.jpg?raw=true"
                    alt="personal care" />
                </div>
                <h3>Personal Care</h3>
              </div>
              <div className="search-categories--homeScientistOption homeScientistOption2">
                <div className="make-circle">
                  <div className="search-categories--homeScientistOptionImg homeScientistOptionImg2">
                    <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/otherRecipe.jpg?raw=true"
                      alt="other recipe ideas" />
                  </div>
                </div>
                <h3>Other</h3>
              </div>

            </div>
          </section>
        </section>
        {/* </div> */}
      </div>
    </div>
  );
}

