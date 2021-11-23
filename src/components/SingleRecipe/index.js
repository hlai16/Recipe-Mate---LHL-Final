import React from 'react';
import RecipeById from './RecipeById';
import Comments from './Comments';
import NavBar from '../NavBar';


export default function SingleRecipe(props) {

  const recipeId = 1; // hardcoded. Should be replaced with search, link, whatever. props, maybe?
  
  return(
    <>
    <NavBar setToken={ props.setToken } />
    <h2>Recipe Presentation</h2>
    <RecipeById recipeId={recipeId}/>
    <Comments recipeId={recipeId}/>
  </>);
}
