import React from 'react';
import { useLocation } from "react-router";
import RecipeById from './RecipeById';
import Comments from './Comments';
import NavBar from '../NavBar';


export default function SingleRecipe(props) {

  const location = useLocation();
  const recipeId = location.state || []

  return(
    <>
      <NavBar setToken={props.setToken} />
      <div className="recipeUrlDiv">
        <h2>Recipe Presentation</h2>
        <RecipeById recipeId={recipeId} />
        <Comments recipeId={recipeId} />
      </div>
    </>);
}
