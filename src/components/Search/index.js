import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar';
import Buttons from '../Buttons';
import './index.scss';

export default function Search(props) {
  
  // IMPORTANT!
  // Each category has an ID number, automatically generated by the seeding, in api.
  // For check: go to /categories in the api location (ex. localhost:3001/categories).
  
  let navigate = useNavigate()
  const handleClick = function(event) {
    axios
      .get(`/categories/${event.target.id}/recipes`)
      .then((res) => {
        navigate("/recipes", { state: res.data })
      })
  }
  
  return (
    <div className="search-categories">
      <NavBar setToken={props.setToken} />
      <div className="search-categories--inner">
        {/* <div classname="search-categories--inner--inner"> */}
        <h1>Browse Recipes:</h1>
        <section className="search-categories--categories">
          <section className="search-category search-categories--homeChef">
            <h2>Home Chef:</h2>

            <div className="search-categories--homeChefOptions">
              <div className="search-categories--homeChefOption homeChefOption1">
                <div className="search-categories--homeChefOptionImg homeChefOptionImg1">
                  <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/breakfast.jpeg?raw=true"
                    alt="breakfast" onClick={handleClick} id={1}/>
                </div>
                <p>Breakfast</p>
              </div>
              <div className="search-categories--homeChefOption homeChefOption2">
                <div className="search-categories--homeChefOptionImg homeChefOptionImg2">
                  <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/lunch.jpg?raw=true"
                    alt="lunch" onClick={handleClick} id={2}/>
                </div>
                <p>Lunch</p>
              </div>
              <div className="search-categories--homeChefOption homeChefOption3">
                <div className="search-categories--homeChefOptionImg homeChefOptionImg3">
                  <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/dinner.jpg?raw=true"
                    alt="dinner" onClick={handleClick} id={3}/>
                </div>
                <p>Dinner</p>
              </div>
              <div className="search-categories--homeChefOption homeChefOption1">
                <div className="search-categories--homeChefOptionImg homeChefOptionImg1">
                  <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/logo.png?raw=true"
                    alt="other" onClick={handleClick} id={7}/>
                </div>
                <p>Other</p>
              </div>
            </div>
          </section>
          <section className="search-categories--homeScientist search-category">
            <h2>Home Scientist:</h2>
            <div className="search-categories--homeScientistOptions">
              <div className="search-categories--homeScientistOption homeScientistOption1">
                <div className="search-categories--homeScientistOptionImg homeScientistOptionImg1">
                  <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/personalCare.jpg?raw=true"
                    alt="personal care" onClick={handleClick} id={4}/>
                </div>
                <p>Personal Care</p>
              </div>
              <div className="search-categories--homeScientistOption homeScientistOption1">
                <div className="make-circle">
                  <div className="search-categories--homeScientistOptionImg homeScientistOptionImg1">
                    <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/logo.png?raw=true"
                      alt="kids" onClick={handleClick} id={6}/>
                  </div>
                </div>
                <p>Kids</p>
              </div>
              <div className="search-categories--homeScientistOption homeScientistOption2">
                <div className="make-circle">
                  <div className="search-categories--homeScientistOptionImg homeScientistOptionImg2">
                    <img src="https://github.com/hlai16/Recipe-Mate---LHL-Final/blob/feature/search-index/public/images/otherRecipe.jpg?raw=true"
                      alt="other recipe ideas" onClick={handleClick} id={5}/>
                  </div>
                </div>
                <p>Other</p>
              </div>

            </div>
          </section>
        </section>
        {/* </div> */}
      </div>
    </div>
  );
}

