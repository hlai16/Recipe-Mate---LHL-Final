import React from 'react';
import NavBar from '../NavBar';
import Buttons from '../Buttons';

export default function Search(props) {
  return (
    <div>
      <NavBar setToken={props.setToken} />
      <h2>Browse Recipes:</h2>
      <section className="categories">
        <section className="homeChef">
          <Buttons>Home Chef:</Buttons>
          <div className="homeChefOptions">
            <div className="homeChefOption homeChefOption1">
              <div className="homeChefOptionImg homeChefOptionImg1">
                <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/breakfast.jpeg?raw=true"
                  alt="breakfast" width="100" />
              </div>
              <h3>Breakfast</h3>
            </div>
            <div className="homeChefOption homeChefOption2">
              <div className="homeChefOptionImg homeChefOptionImg2">
                <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/lunch.jpeg?raw=true"
                  alt="lunch" width="100" />
              </div>
              <h3>Lunch</h3>
            </div>
            <div className="homeChefOption homeChefOption3">
              <div className="homeChefOptionImg homeChefOptionImg3">
                <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/dinner.jpeg?raw=true"
                  alt="dinner" width="100" />
              </div>
              <h3>Dinner</h3>
            </div>
          </div>
        </section>
        <section className="homeScientist">
          <Buttons>Home Scientist:</Buttons>
          <div className="homeScientistOptions">
            <div className="homeScientistOption homeScientistOption1">
              <div className="homeScientistOptionImg homeScientistOptionImg1">
                <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/personalCare.jpeg?raw=true"
                  alt="personal care" width="100" />
              </div>
              <h3>Personal Care</h3>
            </div>
            <div className="homeScientistOption homeScientistOption2">
              <div className="homeScientistOptionImg homeScientistOptionImg2">
                <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/otherRecipe.jpeg?raw=true"
                  alt="other recipe ideas" width="100" />
              </div>
              <h3>Other</h3>
            </div>

          </div>
        </section>
      </section>
    </div>
  );
}

